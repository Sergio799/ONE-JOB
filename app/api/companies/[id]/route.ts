import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const dataPath = join(process.cwd(), 'data', 'companies.json');

interface Company {
  id: string;
  name: string;
  careersUrl: string;
  category: string;
  isFaang: boolean;
  logoUrl?: string;
}

function readCompanies(): Company[] {
  try {
    const data = readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeCompanies(companies: Company[]): void {
  writeFileSync(dataPath, JSON.stringify(companies, null, 2), 'utf-8');
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const companies = readCompanies();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return NextResponse.json(
      { error: 'Company not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(company);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const companies = readCompanies();
    const index = companies.findIndex((c) => c.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      );
    }

    companies[index] = { ...companies[index], ...body };
    writeCompanies(companies);

    return NextResponse.json(companies[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update company' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const companies = readCompanies();
    const filteredCompanies = companies.filter((c) => c.id !== id);

    if (filteredCompanies.length === companies.length) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      );
    }

    writeCompanies(filteredCompanies);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete company' },
      { status: 400 }
    );
  }
}
