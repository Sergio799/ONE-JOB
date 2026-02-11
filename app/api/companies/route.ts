import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get('search')?.toLowerCase() || '';
  const category = searchParams.get('category') || '';
  const faang = searchParams.get('faang') === 'true';

  let companies = readCompanies();

  if (search) {
    companies = companies.filter((c) =>
      c.name.toLowerCase().includes(search)
    );
  }

  if (category) {
    companies = companies.filter((c) => c.category === category);
  }

  if (faang) {
    companies = companies.filter((c) => c.isFaang === true);
  }

  return NextResponse.json(companies);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const companies = readCompanies();

    const newCompany: Company = {
      id: uuidv4(),
      name: body.name,
      careersUrl: body.careersUrl,
      category: body.category,
      isFaang: body.isFaang || false,
      logoUrl: body.logoUrl,
    };

    companies.push(newCompany);
    writeCompanies(companies);

    return NextResponse.json(newCompany, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 400 }
    );
  }
}
