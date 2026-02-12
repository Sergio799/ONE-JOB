'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/lib/store';

export default function Home() {
  const { activeTab, searchQuery, companies, mobileMenuOpen, setActiveTab, setSearchQuery, setCompanies, setMobileMenuOpen } = useAppStore();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      }
    };
    
    fetchCompanies();
  }, [setCompanies]);

  const h1bCompanies = [
    { name: 'Amazon.com Services LLC', url: 'https://www.amazon.jobs/' },
    { name: 'Google LLC', url: 'https://careers.google.com/' },
    { name: 'Microsoft Corporation', url: 'https://careers.microsoft.com/' },
    { name: 'Meta Platforms, Inc.', url: 'https://www.metacareers.com/' },
    { name: 'Apple Inc.', url: 'https://www.apple.com/careers/' },
    { name: 'Intel Corporation', url: 'https://jobs.intel.com/' },
    { name: 'NVIDIA Corporation', url: 'https://www.nvidia.com/en-us/about-nvidia/careers/' },
    { name: 'Oracle America, Inc.', url: 'https://www.oracle.com/careers/' },
    { name: 'Salesforce, Inc.', url: 'https://www.salesforce.com/company/careers/' },
    { name: 'Adobe Inc.', url: 'https://www.adobe.com/careers.html' },
    { name: 'Uber Technologies, Inc.', url: 'https://www.uber.com/us/en/careers/' },
    { name: 'Lyft, Inc.', url: 'https://www.lyft.com/careers' },
    { name: 'Airbnb, Inc.', url: 'https://careers.airbnb.com/' },
    { name: 'Tesla, Inc.', url: 'https://www.tesla.com/careers' },
    { name: 'PayPal, Inc.', url: 'https://careers.pypl.com/home/' },
    { name: 'Visa U.S.A Inc.', url: 'https://usa.visa.com/careers.html' },
    { name: 'Mastercard International Inc.', url: 'https://careers.mastercard.com/' },
    { name: 'Intuit Inc.', url: 'https://www.intuit.com/careers/' },
    { name: 'Workday, Inc.', url: 'https://www.workday.com/en-us/company/careers.html' },
    { name: 'ServiceNow, Inc.', url: 'https://www.servicenow.com/careers.html' },
    { name: 'Snowflake Inc.', url: 'https://careers.snowflake.com/' },
    { name: 'Atlassian U.S., Inc.', url: 'https://www.atlassian.com/company/careers' },
    { name: 'Zoom Video Communications, Inc.', url: 'https://careers.zoom.us/' },
    { name: 'Databricks, Inc.', url: 'https://www.databricks.com/company/careers' },
    { name: 'Cloudflare, Inc.', url: 'https://www.cloudflare.com/careers/' },
    { name: 'MongoDB, Inc.', url: 'https://www.mongodb.com/careers' },
    { name: 'Twilio Inc.', url: 'https://www.twilio.com/company/jobs' },
    { name: 'Splunk Inc.', url: 'https://www.splunk.com/en_us/careers.html' },
    { name: 'Dropbox, Inc.', url: 'https://www.dropbox.com/jobs' },
    { name: 'eBay Inc.', url: 'https://careers.ebayinc.com/' },
    { name: 'Wayfair LLC', url: 'https://www.aboutwayfair.com/careers' },
    { name: 'Walmart Global Tech', url: 'https://careers.walmart.com/' },
    { name: 'IBM Corporation', url: 'https://www.ibm.com/careers' },
    { name: 'Accenture LLP', url: 'https://www.accenture.com/us-en/careers' },
    { name: 'Deloitte Consulting LLP', url: 'https://apply.deloitte.com/' },
    { name: 'Ernst & Young U.S. LLP (EY)', url: 'https://www.ey.com/en_us/careers' },
    { name: 'PricewaterhouseCoopers LLP (PwC)', url: 'https://www.pwccareers.com/' },
    { name: 'KPMG LLP', url: 'https://careers.kpmg.us/' },
    { name: 'Capgemini America, Inc.', url: 'https://www.capgemini.com/us-en/careers/' },
    { name: 'Cognizant Technology Solutions U.S. Corp.', url: 'https://careers.cognizant.com/' },
    { name: 'Tata Consultancy Services Limited (TCS)', url: 'https://www.tcs.com/careers' },
    { name: 'Infosys Limited', url: 'https://www.infosys.com/careers.html' },
    { name: 'Wipro Limited', url: 'https://careers.wipro.com/' },
    { name: 'HCL America Inc.', url: 'https://www.hcltech.com/careers' },
    { name: 'Tech Mahindra (Americas) Inc.', url: 'https://careers.techmahindra.com/' },
    { name: 'LTIMindtree Limited', url: 'https://www.ltimindtree.com/careers/' },
    { name: 'Mphasis Corporation', url: 'https://www.mphasis.com/careers' },
    { name: 'Persistent Systems, Inc.', url: 'https://www.persistent.com/careers/' },
    { name: 'Zensar Technologies, Inc.', url: 'https://www.zensar.com/careers' },
    { name: 'UST Global Inc.', url: 'https://www.ustglobal.com/careers' },
    { name: 'Birlasoft Solutions, Inc.', url: 'https://www.birlasoft.com/careers' },
    { name: 'L&T Technology Services Limited', url: 'https://www.ltts.com/careers' },
    { name: 'SAP America, Inc.', url: 'https://www.sap.com/careers' },
    { name: 'Red Hat, Inc.', url: 'https://www.redhat.com/en/jobs' },
    { name: 'VMware, Inc.', url: 'https://careers.vmware.com/' },
    { name: 'Cisco Systems, Inc.', url: 'https://jobs.cisco.com/' },
    { name: 'Qualcomm Technologies, Inc.', url: 'https://www.qualcomm.com/company/careers' },
    { name: 'Broadcom Inc.', url: 'https://www.broadcom.com/company/careers' },
    { name: 'Texas Instruments Incorporated', url: 'https://careers.ti.com/' },
    { name: 'Micron Technology, Inc.', url: 'https://www.micron.com/careers' },
    { name: 'Applied Materials, Inc.', url: 'https://www.appliedmaterials.com/company/careers' },
    { name: 'Lam Research Corporation', url: 'https://www.lamresearch.com/careers/' },
    { name: 'ASML US, LLC', url: 'https://www.asml.com/en/careers' },
    { name: 'GLOBALFOUNDRIES U.S. Inc.', url: 'https://www.gf.com/careers' },
    { name: 'Analog Devices, Inc.', url: 'https://www.analog.com/en/about-adi/careers.html' },
    { name: 'Marvell Semiconductor, Inc.', url: 'https://www.marvell.com/company/careers.html' },
    { name: 'Western Digital Technologies, Inc.', url: 'https://www.wdc.com/en-us/careers.html' },
    { name: 'Seagate Technology LLC', url: 'https://www.seagate.com/careers/' },
    { name: 'Roku, Inc.', url: 'https://www.roku.com/en/careers' },
    { name: 'Snap Inc.', url: 'https://careers.snap.com/' },
    { name: 'Pinterest, Inc.', url: 'https://www.pinterestcareers.com/' },
    { name: 'Bloomberg L.P.', url: 'https://www.bloomberg.com/careers/' },
    { name: 'FactSet Research Systems Inc.', url: 'https://www.factset.com/careers' },
    { name: 'S&P Global Inc.', url: 'https://www.spglobal.com/careers' },
    { name: 'Morningstar, Inc.', url: 'https://www.morningstar.com/careers' },
    { name: 'Two Sigma Investments, LP', url: 'https://www.twosigma.com/careers/' },
    { name: 'Jane Street Group, LLC', url: 'https://www.janestreet.com/careers/' },
    { name: 'Citadel LLC', url: 'https://www.citadel.com/careers/' },
    { name: 'Citadel Securities LLC', url: 'https://www.citadelsecurities.com/careers/' },
    { name: 'Hudson River Trading LLC', url: 'https://www.hudsonrivertrading.com/careers/' },
    { name: 'AQR Capital Management, LLC', url: 'https://www.aqr.com/careers' },
    { name: 'Goldman Sachs & Co. LLC', url: 'https://www.goldmansachs.com/careers/' },
    { name: 'JPMorgan Chase & Co.', url: 'https://careers.jpmorgan.com/' },
    { name: 'Morgan Stanley & Co. LLC', url: 'https://www.morganstanley.com/careers' },
    { name: 'Bank of America, N.A.', url: 'https://careers.bankofamerica.com/' },
    { name: 'Wells Fargo Bank, N.A.', url: 'https://www.wellsfargojobs.com/' },
    { name: 'Citigroup Inc. (Citibank, N.A.)', url: 'https://jobs.citi.com/' },
    { name: 'Capital One Services, LLC', url: 'https://www.capitalonecareers.com/' },
    { name: 'American Express Company', url: 'https://www.americanexpress.com/en-us/careers/' },
    { name: 'BlackRock, Inc.', url: 'https://careers.blackrock.com/' },
    { name: 'State Street Corporation', url: 'https://careers.statestreet.com/' },
    { name: 'Fidelity Investments (FMR LLC)', url: 'https://www.fidelitycareers.com/' },
    { name: 'Charles Schwab & Co., Inc.', url: 'https://www.aboutschwab.com/careers' },
    { name: 'Coinbase, Inc.', url: 'https://www.coinbase.com/careers' },
    { name: 'Robinhood Markets, Inc.', url: 'https://careers.robinhood.com/' },
    { name: 'Stripe, Inc.', url: 'https://stripe.com/jobs' },
    { name: 'Block, Inc. (Square)', url: 'https://block.xyz/careers' },
    { name: 'Netflix, Inc.', url: 'https://jobs.netflix.com/' },
    { name: 'Spotify USA Inc.', url: 'https://www.lifeatspotify.com/jobs' },
    { name: 'Okta, Inc.', url: 'https://www.okta.com/company/careers/' },
    { name: 'PagerDuty, Inc.', url: 'https://www.pagerduty.com/careers/' },
    { name: 'Elastic, Inc.', url: 'https://www.elastic.co/careers/' },
    { name: 'GitHub, Inc.', url: 'https://github.com/about/careers' },
    { name: 'GitLab Inc.', url: 'https://about.gitlab.com/jobs/' },
    { name: 'HashiCorp, Inc.', url: 'https://www.hashicorp.com/careers' },
    { name: 'Palantir Technologies Inc.', url: 'https://www.palantir.com/careers/' },
    { name: 'DoorDash, Inc.', url: 'https://careers.doordash.com/' },
    { name: 'Instacart (Maplebear Inc.)', url: 'https://www.instacart.com/careers' },
    { name: 'Etsy, Inc.', url: 'https://careers.etsy.com/' },
    { name: 'Expedia Group, Inc.', url: 'https://careers.expediagroup.com/' },
    { name: 'Booking Holdings Inc.', url: 'https://careers.booking.com/' },
    { name: 'Advanced Micro Devices, Inc. (AMD)', url: 'https://www.amd.com/en/corporate/careers.html' },
    { name: 'Synopsys, Inc.', url: 'https://www.synopsys.com/careers.html' },
    { name: 'Cadence Design Systems, Inc.', url: 'https://www.cadence.com/en_US/home/company/careers.html' },
    { name: 'MathWorks, Inc.', url: 'https://www.mathworks.com/company/jobs.html' },
    { name: 'Autodesk, Inc.', url: 'https://www.autodesk.com/careers' },
    { name: 'Ansys, Inc.', url: 'https://www.ansys.com/careers' },
    { name: 'Siemens Industry Software Inc.', url: 'https://www.siemens.com/careers' },
    { name: 'Honeywell International Inc.', url: 'https://careers.honeywell.com/' },
    { name: 'General Electric Company (GE)', url: 'https://www.ge.com/careers' },
    { name: 'The Boeing Company', url: 'https://jobs.boeing.com/' },
    { name: 'UnitedHealth Group (Optum)', url: 'https://careers.unitedhealthgroup.com/' },
    { name: 'CVS Health (Aetna)', url: 'https://jobs.cvshealth.com/' },
    { name: 'Cigna Healthcare', url: 'https://www.cigna.com/careers' },
    { name: 'Humana Inc.', url: 'https://careers.humana.com/' },
    { name: 'Elevance Health, Inc.', url: 'https://www.elevancehealth.com/careers' },
    { name: 'IQVIA Inc.', url: 'https://careers.iqvia.com/' },
    { name: 'Epic Systems Corporation', url: 'https://www.epic.com/careers' },
    { name: 'Oracle Health (Cerner Corporation)', url: 'https://www.cerner.com/careers' },
    { name: 'Medtronic, Inc.', url: 'https://www.medtronic.com/us-en/about/careers.html' },
    { name: 'Boston Scientific Corporation', url: 'https://www.bostonscientific.com/en-US/careers.html' },
    { name: 'Abbott Laboratories', url: 'https://www.abbott.com/careers.html' },
    { name: 'AbbVie Inc.', url: 'https://careers.abbvie.com/' },
    { name: 'Johnson & Johnson', url: 'https://www.careers.jnj.com/' },
    { name: 'Pfizer Inc.', url: 'https://www.pfizer.com/about/careers' },
    { name: 'Merck & Co., Inc.', url: 'https://www.merck.com/careers/' },
    { name: 'Bristol-Myers Squibb Company', url: 'https://careers.bms.com/' },
    { name: 'Amgen Inc.', url: 'https://careers.amgen.com/' },
    { name: 'Gilead Sciences, Inc.', url: 'https://www.gilead.com/careers' },
    { name: 'Biogen Inc.', url: 'https://www.biogen.com/careers.html' },
    { name: 'Regeneron Pharmaceuticals, Inc.', url: 'https://careers.regeneron.com/' },
    { name: 'Genentech, Inc.', url: 'https://www.gene.com/careers' },
    { name: 'Illumina, Inc.', url: 'https://www.illumina.com/company/careers.html' },
    { name: 'Thermo Fisher Scientific Inc.', url: 'https://jobs.thermofisher.com/' },
    { name: 'Danaher Corporation', url: 'https://jobs.danaher.com/' },
    { name: 'Ford Motor Company', url: 'https://corporate.ford.com/careers.html' },
    { name: 'General Motors LLC', url: 'https://search-careers.gm.com/' },
    { name: 'Toyota Motor North America, Inc.', url: 'https://www.toyota.com/usa/careers' },
    { name: 'Mercedes-Benz R&D North America, Inc.', url: 'https://www.mbrdna.com/careers' },
    { name: 'BMW of North America, LLC', url: 'https://www.bmwgroup.jobs/us/en.html' },
    { name: 'Robert Bosch LLC', url: 'https://www.bosch.us/careers/' },
    { name: 'Continental Automotive Systems, Inc.', url: 'https://www.continental.com/en/careers' },
    { name: 'NXP Semiconductors', url: 'https://www.nxp.com/careers' },
    { name: 'ServiceTitan, Inc.', url: 'https://www.servicetitan.com/careers' },
    { name: 'Rivian Automotive, LLC', url: 'https://rivian.com/careers' },
    { name: 'Lucid Motors', url: 'https://www.lucidmotors.com/careers' },
    { name: 'WeWork, Inc.', url: 'https://www.wework.com/careers' },
    { name: 'SnapLogic, Inc.', url: 'https://www.snaplogic.com/careers' },
    { name: 'Nutanix, Inc.', url: 'https://www.nutanix.com/company/careers' },
    { name: 'C3.ai, Inc.', url: 'https://c3.ai/careers/' },
    { name: 'Samsara, Inc.', url: 'https://www.samsara.com/careers' },
    { name: 'HubSpot, Inc.', url: 'https://www.hubspot.com/careers' },
    { name: 'Veeva Systems Inc.', url: 'https://careers.veeva.com/' },
    { name: 'Datadog, Inc.', url: 'https://careers.datadoghq.com/' },
    { name: 'Illumio, Inc.', url: 'https://www.illumio.com/careers' },
    { name: 'Bill.com, LLC', url: 'https://www.bill.com/careers' },
    { name: 'Toast, Inc.', url: 'https://careers.toasttab.com/' },
    { name: 'OpenAI', url: 'https://openai.com/careers/' },
    { name: 'Anthropic', url: 'https://www.anthropic.com/careers' },
    { name: 'Scale AI', url: 'https://scale.com/careers' },
    { name: 'Notion Labs, Inc.', url: 'https://www.notion.so/careers' },
    { name: 'Figma, Inc.', url: 'https://www.figma.com/careers/' },
    { name: 'Plaid Inc.', url: 'https://plaid.com/careers/' },
    { name: 'Postman, Inc.', url: 'https://www.postman.com/careers/' },
    { name: 'Rippling', url: 'https://www.rippling.com/careers' },
    { name: 'Brex Inc.', url: 'https://www.brex.com/careers' },
    { name: 'Gusto', url: 'https://gusto.com/careers' },
    { name: 'Benchling, Inc.', url: 'https://www.benchling.com/careers' },
    { name: 'Faire', url: 'https://www.faire.com/careers' },
    { name: 'Anduril Industries', url: 'https://www.anduril.com/careers/' },
    { name: 'Flexport', url: 'https://www.flexport.com/careers' },
    { name: 'Ramp', url: 'https://ramp.com/careers' },
    { name: 'Bolt Financial', url: 'https://www.bolt.com/careers' },
    { name: 'Reddit, Inc.', url: 'https://www.redditinc.com/careers' },
    { name: 'Discord Inc.', url: 'https://discord.com/careers' },
    { name: 'Duolingo, Inc.', url: 'https://careers.duolingo.com/' },
    { name: 'Canva (US)', url: 'https://www.canva.com/careers/' }
  ];

  const filteredH1bCompanies = h1bCompanies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const optCompanies = [
    { name: 'NVIDIA', url: 'https://www.nvidia.com/en-us/about-nvidia/careers/' },
    { name: 'Intel', url: 'https://jobs.intel.com/' },
    { name: 'AMD', url: 'https://www.amd.com/en/corporate/careers.html' },
    { name: 'Qualcomm', url: 'https://www.qualcomm.com/company/careers' },
    { name: 'Broadcom', url: 'https://www.broadcom.com/company/careers' },
    { name: 'Tesla', url: 'https://www.tesla.com/careers' },
    { name: 'Stripe', url: 'https://stripe.com/jobs' },
    { name: 'PayPal', url: 'https://careers.pypl.com/home/' },
    { name: 'Databricks', url: 'https://www.databricks.com/company/careers' },
    { name: 'Palantir Technologies', url: 'https://www.palantir.com/careers/' },
    { name: 'ServiceNow', url: 'https://www.servicenow.com/careers.html' },
    { name: 'Workday', url: 'https://www.workday.com/en-us/company/careers.html' },
    { name: 'Okta', url: 'https://www.okta.com/company/careers/' },
    { name: 'Atlassian', url: 'https://www.atlassian.com/company/careers' },
    { name: 'Snowflake', url: 'https://careers.snowflake.com/' },
    { name: 'Twilio', url: 'https://www.twilio.com/company/jobs' },
    { name: 'Splunk', url: 'https://www.splunk.com/en_us/careers.html' },
    { name: 'Palo Alto Networks', url: 'https://jobs.paloaltonetworks.com/' },
    { name: 'CrowdStrike', url: 'https://www.crowdstrike.com/careers/' },
    { name: 'Uber', url: 'https://www.uber.com/us/en/careers/' },
    { name: 'Lyft', url: 'https://www.lyft.com/careers' },
    { name: 'DoorDash', url: 'https://careers.doordash.com/' },
    { name: 'Airbnb', url: 'https://careers.airbnb.com/' },
    { name: 'Pinterest', url: 'https://www.pinterestcareers.com/' },
    { name: 'Snap Inc.', url: 'https://careers.snap.com/' },
    { name: 'Reddit', url: 'https://www.redditinc.com/careers' },
    { name: 'LinkedIn', url: 'https://careers.linkedin.com/' },
    { name: 'Spotify', url: 'https://www.lifeatspotify.com/jobs' },
    { name: 'Netflix', url: 'https://jobs.netflix.com/' },
    { name: 'Adobe', url: 'https://www.adobe.com/careers.html' },
    { name: 'Cisco', url: 'https://jobs.cisco.com/' },
    { name: 'VMware', url: 'https://careers.vmware.com/' },
    { name: 'Intuit', url: 'https://www.intuit.com/careers/' },
    { name: 'Block (Square)', url: 'https://block.xyz/careers' },
    { name: 'Robinhood', url: 'https://careers.robinhood.com/' },
    { name: 'Coinbase', url: 'https://www.coinbase.com/careers' },
    { name: 'Rivian', url: 'https://rivian.com/careers' },
    { name: 'Lucid Motors', url: 'https://www.lucidmotors.com/careers' },
    { name: 'Duolingo', url: 'https://careers.duolingo.com/' },
    { name: 'Coursera', url: 'https://about.coursera.org/careers/' },
    { name: 'Figma', url: 'https://www.figma.com/careers/' },
    { name: 'Notion', url: 'https://www.notion.so/careers' },
    { name: 'Elastic', url: 'https://www.elastic.co/careers/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/careers' },
    { name: 'HashiCorp', url: 'https://www.hashicorp.com/careers' },
    { name: 'Datadog', url: 'https://careers.datadoghq.com/' },
    { name: 'Confluent', url: 'https://www.confluent.io/careers/' },
    { name: 'GitLab', url: 'https://about.gitlab.com/jobs/' },
    { name: 'Cloudflare', url: 'https://www.cloudflare.com/careers/' },
    { name: 'Goldman Sachs', url: 'https://www.goldmansachs.com/careers/' },
    { name: 'JPMorgan Chase', url: 'https://careers.jpmorgan.com/' },
    { name: 'Citigroup', url: 'https://jobs.citi.com/' },
    { name: 'Morgan Stanley', url: 'https://www.morganstanley.com/careers' },
    { name: 'UBS', url: 'https://www.ubs.com/global/en/careers.html' },
    { name: 'BNY Mellon', url: 'https://www.bnymellon.com/careers' },
    { name: 'State Street', url: 'https://careers.statestreet.com/' },
    { name: 'Charles Schwab', url: 'https://www.aboutschwab.com/careers' },
    { name: 'American Express', url: 'https://www.americanexpress.com/en-us/careers/' },
    { name: 'Visa', url: 'https://usa.visa.com/careers.html' },
    { name: 'Mastercard', url: 'https://careers.mastercard.com/' },
    { name: 'Deloitte', url: 'https://apply.deloitte.com/' },
    { name: 'McKinsey & Company', url: 'https://www.mckinsey.com/careers' },
    { name: 'Boston Consulting Group', url: 'https://careers.bcg.com/' },
    { name: 'Bain & Company', url: 'https://www.bain.com/careers/' },
    { name: 'Accenture', url: 'https://www.accenture.com/us-en/careers' },
    { name: 'Booz Allen Hamilton', url: 'https://careers.boozallen.com/' },
    { name: 'Oliver Wyman', url: 'https://www.oliverwyman.com/careers.html' },
    { name: 'Johnson & Johnson', url: 'https://www.careers.jnj.com/' },
    { name: 'Pfizer', url: 'https://www.pfizer.com/about/careers' },
    { name: 'Moderna', url: 'https://www.modernatx.com/careers' },
    { name: 'AbbVie', url: 'https://careers.abbvie.com/' },
    { name: 'Bristol Myers Squibb', url: 'https://careers.bms.com/' },
    { name: 'Amgen', url: 'https://careers.amgen.com/' },
    { name: 'Regeneron', url: 'https://careers.regeneron.com/' },
    { name: 'Biogen', url: 'https://www.biogen.com/careers.html' },
    { name: 'Thermo Fisher Scientific', url: 'https://jobs.thermofisher.com/' },
    { name: 'Illumina', url: 'https://www.illumina.com/company/careers.html' },
    { name: 'UnitedHealth Group', url: 'https://careers.unitedhealthgroup.com/' },
    { name: 'Optum', url: 'https://www.optum.com/en/about-us/careers.html' },
    { name: 'Mayo Clinic', url: 'https://jobs.mayoclinic.org/' },
    { name: 'Cleveland Clinic', url: 'https://jobs.clevelandclinic.org/' },
    { name: 'Intuitive Surgical', url: 'https://careers.intuitive.com/' },
    { name: 'Medtronic', url: 'https://www.medtronic.com/us-en/about/careers.html' },
    { name: 'Boston Scientific', url: 'https://www.bostonscientific.com/en-US/careers.html' },
    { name: 'Edwards Lifesciences', url: 'https://www.edwards.com/careers' },
    { name: 'Genentech', url: 'https://www.gene.com/careers' },
    { name: 'General Motors', url: 'https://search-careers.gm.com/' },
    { name: 'Ford Motor', url: 'https://corporate.ford.com/careers.html' },
    { name: 'Toyota North America', url: 'https://www.toyota.com/usa/careers' },
    { name: 'Honda North America', url: 'https://www.honda.com/careers' },
    { name: 'Hyundai Motor America', url: 'https://careers.hyundai.com/' },
    { name: 'BMW North America', url: 'https://www.bmwgroup.jobs/us/en.html' },
    { name: 'Bosch North America', url: 'https://www.bosch.us/careers/' },
    { name: '3M', url: 'https://www.3m.com/3M/en_US/careers-us/' },
    { name: 'Honeywell', url: 'https://careers.honeywell.com/' },
    { name: 'General Electric', url: 'https://www.ge.com/careers' },
    { name: 'Caterpillar', url: 'https://www.caterpillar.com/en/careers.html' },
    { name: 'Deere & Company', url: 'https://www.deere.com/en/our-company/careers/' },
    { name: 'Cummins', url: 'https://www.cummins.com/careers' },
    { name: 'Parker Hannifin', url: 'https://www.parker.com/us/en/careers.html' },
    { name: 'Emerson Electric', url: 'https://www.emerson.com/en-us/careers' },
    { name: 'Aptiv', url: 'https://www.aptiv.com/en/careers' },
    { name: 'NextEra Energy', url: 'https://www.nexteraenergy.com/careers.html' },
    { name: 'Duke Energy', url: 'https://www.duke-energy.com/our-company/careers' },
    { name: 'Southern Company', url: 'https://southerncompany.jobs/' },
    { name: 'Dominion Energy', url: 'https://careers.dominionenergy.com/' },
    { name: 'Exxon Mobil', url: 'https://corporate.exxonmobil.com/careers' },
    { name: 'Chevron', url: 'https://www.chevron.com/careers' },
    { name: 'Baker Hughes', url: 'https://careers.bakerhughes.com/' },
    { name: 'SLB (Schlumberger)', url: 'https://careers.slb.com/' },
    { name: 'Fluor Corporation', url: 'https://www.fluor.com/careers' },
    { name: 'Boeing', url: 'https://jobs.boeing.com/' },
    { name: 'Northrop Grumman', url: 'https://www.northropgrumman.com/careers' },
    { name: 'RTX (Raytheon)', url: 'https://careers.rtx.com/' },
    { name: 'General Dynamics', url: 'https://www.gd.com/careers' },
    { name: 'L3Harris Technologies', url: 'https://careers.l3harris.com/' },
    { name: 'Target', url: 'https://corporate.target.com/careers' },
    { name: 'Costco', url: 'https://www.costco.com/jobs.html' },
    { name: 'Nike', url: 'https://jobs.nike.com/' },
    { name: 'PepsiCo', url: 'https://www.pepsicojobs.com/' },
    { name: 'Coca-Cola', url: 'https://careers.coca-colacompany.com/' },
    { name: 'Procter & Gamble', url: 'https://www.pgcareers.com/' },
    { name: 'Unilever', url: 'https://careers.unilever.com/' },
    { name: 'Mars Inc.', url: 'https://careers.mars.com/' },
    { name: 'General Mills', url: 'https://careers.generalmills.com/' },
    { name: 'Colgate-Palmolive', url: 'https://jobs.colgatepalmolive.com/' },
    { name: 'Verizon', url: 'https://www.verizon.com/about/careers' },
    { name: 'T-Mobile', url: 'https://www.t-mobile.com/careers' },
    { name: 'Comcast', url: 'https://jobs.comcast.com/' },
    { name: 'Walt Disney Company', url: 'https://jobs.disneycareers.com/' },
    { name: 'Warner Bros. Discovery', url: 'https://careers.wbd.com/' },
    { name: 'Electronic Arts', url: 'https://www.ea.com/careers' },
    { name: 'Epic Games', url: 'https://www.epicgames.com/site/en-US/careers' },
    { name: 'Liberty Mutual', url: 'https://jobs.libertymutualgroup.com/' },
    { name: 'Progressive', url: 'https://www.progressive.com/careers/' },
    { name: 'Travelers', url: 'https://careers.travelers.com/' },
    { name: 'Hartford Financial', url: 'https://www.thehartford.com/careers' },
    { name: 'MetLife', url: 'https://jobs.metlife.com/' },
    { name: 'FedEx', url: 'https://careers.fedex.com/' },
    { name: 'UPS', url: 'https://www.jobs-ups.com/' },
    { name: 'C.H. Robinson', url: 'https://www.chrobinson.com/en-us/careers/' },
    { name: 'Maersk', url: 'https://www.maersk.com/careers' },
    { name: 'XPO Logistics', url: 'https://jobs.xpo.com/' },
    { name: 'AECOM', url: 'https://aecom.jobs/' },
    { name: 'Jacobs Engineering', url: 'https://careers.jacobs.com/' },
    { name: 'Bechtel', url: 'https://www.bechtel.com/careers/' },
    { name: 'CBRE Group', url: 'https://www.cbre.com/careers' },
    { name: 'JLL', url: 'https://www.us.jll.com/en/careers' },
    { name: 'Marriott International', url: 'https://www.marriott.com/careers/' },
    { name: 'Hilton', url: 'https://jobs.hilton.com/' },
    { name: 'Booking.com', url: 'https://careers.booking.com/' },
    { name: 'eBay', url: 'https://careers.ebayinc.com/' },
    { name: 'Shopify', url: 'https://www.shopify.com/careers' },
    { name: 'Wayfair', url: 'https://www.aboutwayfair.com/careers' },
    { name: 'Etsy', url: 'https://careers.etsy.com/' },
    { name: 'Zillow', url: 'https://www.zillow.com/careers/' },
    { name: 'Tata Consultancy (TCS)', url: 'https://www.tcs.com/careers' },
    { name: 'Wipro', url: 'https://careers.wipro.com/' },
    { name: 'Tech Mahindra', url: 'https://careers.techmahindra.com/' },
    { name: 'HCLTech', url: 'https://www.hcltech.com/careers' },
    { name: 'Persistent Systems', url: 'https://www.persistent.com/careers/' },
    { name: 'LTIMindtree', url: 'https://www.ltimindtree.com/careers/' },
    { name: '10x Genomics', url: 'https://www.10xgenomics.com/careers' },
    { name: 'Ginkgo Bioworks', url: 'https://www.ginkgobioworks.com/careers/' },
    { name: 'Vertex Pharmaceuticals', url: 'https://www.vrtx.com/careers/' },
    { name: 'Gilead Sciences', url: 'https://www.gilead.com/careers' },
    { name: 'BioMarin', url: 'https://www.biomarin.com/our-company/careers/' },
    { name: 'Texas Instruments', url: 'https://careers.ti.com/' },
    { name: 'Micron Technology', url: 'https://www.micron.com/careers' },
    { name: 'Applied Materials', url: 'https://www.appliedmaterials.com/company/careers' },
    { name: 'Lam Research', url: 'https://www.lamresearch.com/careers/' },
    { name: 'KLA Corporation', url: 'https://www.kla.com/careers' },
    { name: 'Marvell Technology', url: 'https://www.marvell.com/company/careers.html' },
    { name: 'Synopsys', url: 'https://www.synopsys.com/careers.html' },
    { name: 'Cadence Design', url: 'https://www.cadence.com/en_US/home/company/careers.html' },
    { name: 'Analog Devices', url: 'https://www.analog.com/en/about-adi/careers.html' },
    { name: 'ON Semiconductor', url: 'https://www.onsemi.com/careers' },
    { name: 'Anthropic', url: 'https://www.anthropic.com/careers' },
    { name: 'OpenAI', url: 'https://openai.com/careers/' },
    { name: 'Scale AI', url: 'https://scale.com/careers' },
    { name: 'Anduril Industries', url: 'https://www.anduril.com/careers/' },
    { name: 'Ramp', url: 'https://ramp.com/careers' },
    { name: 'Brex', url: 'https://www.brex.com/careers' },
    { name: 'Plaid', url: 'https://plaid.com/careers/' },
    { name: 'Toast', url: 'https://careers.toasttab.com/' },
    { name: 'HubSpot', url: 'https://www.hubspot.com/careers' },
    { name: 'Salesforce', url: 'https://www.salesforce.com/company/careers/' },
    { name: 'Nutanix', url: 'https://www.nutanix.com/company/careers' },
    { name: 'Zscaler', url: 'https://www.zscaler.com/careers' },
    { name: 'Fortinet', url: 'https://www.fortinet.com/corporate/careers' },
    { name: 'Cargill', url: 'https://careers.cargill.com/' },
    { name: 'ADM', url: 'https://www.adm.com/en-us/careers/' },
    { name: 'Dow Chemical', url: 'https://corporate.dow.com/en-us/careers.html' },
    { name: 'BASF', url: 'https://www.basf.com/us/en/careers.html' },
    { name: 'Corning', url: 'https://www.corning.com/worldwide/en/careers.html' },
    { name: 'Nucor', url: 'https://www.nucor.com/careers/' },
    { name: 'Becton Dickinson', url: 'https://jobs.bd.com/' },
    { name: 'Zimmer Biomet', url: 'https://www.zimmerbiomet.com/en/careers.html' },
    { name: 'Hologic', url: 'https://www.hologic.com/careers' },
    { name: 'Agilent Technologies', url: 'https://careers.agilent.com/' },
    { name: 'Danaher', url: 'https://jobs.danaher.com/' },
    { name: 'Keysight Technologies', url: 'https://www.keysight.com/us/en/about/careers.html' },
    { name: 'Akamai Technologies', url: 'https://www.akamai.com/careers' },
    { name: 'Veeva Systems', url: 'https://careers.veeva.com/' },
    { name: 'Arista Networks', url: 'https://www.arista.com/en/careers' }
  ];

  const filteredOptCompanies = optCompanies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      <header className="md:hidden flex items-center justify-between bg-white px-3 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="100" cy="100" r="95" fill="#1e293b"/>
            <g transform="translate(100, 100)">
              <rect x="-35" y="-8" width="70" height="16" fill="white" rx="3"/>
              <rect x="-8" y="-35" width="16" height="70" fill="white" rx="3"/>
              <rect x="-25" y="-25" width="70" height="16" fill="white" rx="3" transform="rotate(45)"/>
              <rect x="-25" y="-25" width="70" height="16" fill="white" rx="3" transform="rotate(-45)"/>
            </g>
          </svg>
          <h1 className="text-base font-bold text-gray-900">One Job</h1>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Sidebar / Mobile Menu */}
      <nav 
        id="mobile-nav"
        className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-64 bg-white flex-col p-4 md:p-8 absolute md:relative top-14 md:top-0 left-0 right-0 z-40 md:z-auto max-h-[calc(100vh-56px)] md:max-h-screen overflow-y-auto`}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3 mb-8 md:mb-12 hidden md:flex">
          <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" fill="#1e293b"/>
            <g transform="translate(100, 100)">
              <rect x="-35" y="-8" width="70" height="16" fill="white" rx="3"/>
              <rect x="-8" y="-35" width="16" height="70" fill="white" rx="3"/>
              <rect x="-25" y="-25" width="70" height="16" fill="white" rx="3" transform="rotate(45)"/>
              <rect x="-25" y="-25" width="70" height="16" fill="white" rx="3" transform="rotate(-45)"/>
            </g>
          </svg>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">One Job</h1>
        </div>
        
        <nav className="space-y-2 flex-1">
          <button
            onClick={() => { setActiveTab('browse'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'browse'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-current={activeTab === 'browse' ? 'page' : undefined}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Platforms</span>
          </button>
          <button
            onClick={() => { setActiveTab('lists'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'lists'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm0 12H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm12-12h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2zm0 12h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Lists</span>
          </button>
          <button
            onClick={() => { setActiveTab('faang'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'faang'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">FAANG</span>
          </button>
          <button
            onClick={() => { setActiveTab('all'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'all'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">All Companies</span>
          </button>
          <button
            onClick={() => { setActiveTab('yc'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'yc'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">YC Startups</span>
          </button>
          <button
            onClick={() => { setActiveTab('contract'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'contract'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Contract Jobs</span>
          </button>
          <button
            onClick={() => { setActiveTab('networking'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'networking'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zm6 6h-1v-1a1 1 0 00-1-1h-1v2h3v-1a1 1 0 00-1-1h-1v2h3zm-6 0H5v-1a1 1 0 00-1-1H3v2h6v-1a1 1 0 00-1-1H5v2h6z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Networking</span>
          </button>
          <button
            onClick={() => { setActiveTab('h1b'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'h1b'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">H1B Sponsored</span>
          </button>
          <button
            onClick={() => { setActiveTab('opt'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'opt'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">OPT & STEM OPT</span>
          </button>
          <button
            onClick={() => { setActiveTab('recruiter'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'recruiter'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Recruiter Email</span>
          </button>
          <button
            onClick={() => { setActiveTab('coldemail'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'coldemail'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Cold Email</span>
          </button>
          <button
            onClick={() => { setActiveTab('star'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg transition-colors active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 ${
              activeTab === 'star'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-xs md:text-sm font-semibold">Star</span>
          </button>
        </nav>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white w-full">
        {/* Header */}
        <div className="px-3 md:px-12 py-4 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 sticky top-14 md:top-0 bg-white z-30">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              {activeTab === 'browse' && (
                <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Platforms</h2>
              )}
            {activeTab === 'lists' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Lists</h2>
            )}
            {activeTab === 'saved' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Saved</h2>
            )}
            {activeTab === 'faang' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">FAANG</h2>
            )}
            {activeTab === 'all' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">All Companies</h2>
            )}
            {activeTab === 'yc' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">YC Startups</h2>
            )}
            {activeTab === 'contract' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Contract Jobs</h2>
            )}
            {activeTab === 'networking' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Networking</h2>
            )}
            {activeTab === 'h1b' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">H1B Sponsored</h2>
            )}
            {activeTab === 'opt' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">OPT & STEM OPT</h2>
            )}
            {activeTab === 'recruiter' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Recruiter Email</h2>
            )}
            {activeTab === 'coldemail' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Cold Email</h2>
            )}
            {activeTab === 'star' && (
              <h2 className="text-3xl md:text-7xl font-black text-gray-900 leading-tight md:leading-none">Star</h2>
            )}
          </div>
          </div>
          {activeTab !== 'browse' && activeTab !== 'lists' && activeTab !== 'recruiter' && activeTab !== 'networking' && activeTab !== 'contract' && activeTab !== 'yc' && activeTab !== 'coldemail' && (
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 md:px-6 py-2 md:py-3 border border-gray-300 hover:bg-gray-200 transition-all w-full md:w-auto">
              <svg className="w-4 md:w-5 h-4 md:h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-900 placeholder-gray-500 outline-none flex-1 text-sm"
              />
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="flex-1 px-3 md:px-12 py-4 md:py-8 overflow-y-auto">
          {activeTab === 'browse' && (
            <div className="space-y-12">
              {/* Other Platforms Section */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://www.linkedin.com/in/saiprakash07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                <span className="text-sm text-gray-600">Connect with me</span>
              </a>

              <a
                href="https://hiring.cafe/?searchState=%7B%22departments%22%3A%5B%22Software+Development%22%2C%22Information+Technology%22%5D%2C%22seniorityLevel%22%3A%5B%22Entry+Level%22%2C%22Mid+Level%22%5D%2C%22jobTitleQuery%22%3A%22software+engineer%2C+Full+Stack+developer%2C+software+Developer%2C+Front+end+Developer%2C+Backend+Developer%22%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L20 9V21H4V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Hiring Cafe</h3>
                <span className="text-sm text-gray-600">Find job opportunities</span>
              </a>

              <a
                href="https://airtable.com/appjDG7vmPOm1pO7S/shr763VHjlzPBDCgN/tblLP4AtskrLA8Aw1?viewControls=on"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 2L14 4L10 6L6 4Z" fill="#FFAF00"/>
                  <path d="M4 8L8 6L12 8L8 10L4 8Z" fill="#FF1B6D"/>
                  <path d="M12 8L16 6L20 8L16 10L12 8Z" fill="#00A4EF"/>
                  <path d="M4 14L8 12L12 14L8 16L4 14Z" fill="#FF1B6D"/>
                  <path d="M12 14L16 12L20 14L16 16L12 14Z" fill="#00A4EF"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Airtable</h3>
                <span className="text-sm text-gray-600">Track opportunities</span>
              </a>

              <a
                href="https://jobright.ai/jobs/recommend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-emerald-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">JobRight</h3>
                <span className="text-sm text-gray-600">AI job recommendations</span>
              </a>

              <a
                href="https://github.com/SimplifyJobs/New-Grad-Positions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <svg className="w-8 h-8 text-gray-900 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">New Grad Positions</h3>
                <span className="text-sm text-gray-600">GitHub job listings</span>
              </a>

              <a
                href="https://github.com/zapplyjobs/New-Grad-Jobs-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <svg className="w-8 h-8 text-gray-900 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">New Grad Jobs 2026</h3>
                <span className="text-sm text-gray-600">Zapply job listings</span>
              </a>

              <a
                href="https://www.ycombinator.com/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-orange-400 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Y</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Y Combinator</h3>
                <span className="text-sm text-gray-600">Startup job opportunities</span>
              </a>

              <a
                href="https://www.indeed.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Indeed</h3>
                <span className="text-sm text-gray-600">Job search platform</span>
              </a>

              <a
                href="https://simplify.jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Simplify</h3>
                <span className="text-sm text-gray-600">Job application automation</span>
              </a>

              <a
                href="https://www.newgrad-jobs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">NewGrad Jobs</h3>
                <span className="text-sm text-gray-600">Entry-level job opportunities</span>
              </a>

              <a
                href="https://my.greenhouse.io/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 mb-4 bg-emerald-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Greenhouse</h3>
                <span className="text-sm text-gray-600">Job board platform</span>
              </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <span className="text-gray-500 text-lg">No saved companies yet</span>
            </div>
          )}

          {activeTab === 'lists' && (
            <div className="flex flex-col gap-6">
              <a
                href="https://docs.google.com/spreadsheets/d/1LOulbPzt6mM89q_zO3Obp3L_Jb3w6CkHZfYnjmwOpAA/edit?pli=1&gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
              >
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Startups that Sponsor</h3>
                  <span className="text-sm text-gray-600">Mega List (by Alma)</span>
                </div>
              </a>

              <a
                href="https://docs.google.com/spreadsheets/d/1PNsRyitxpvm-bSu2Wwzi0vfXqde4CbkK/edit?gid=366238974#gid=366238974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
              >
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">H-1B Sponsorship Information</h3>
                  <span className="text-sm text-gray-600">IT Companies</span>
                </div>
              </a>

              <a
                href="https://docs.google.com/spreadsheets/d/1W_noC_9SEEKCIYJO-JfYbHD9zBsR35QOhfPmJNe44SY/edit?gid=923290848#gid=923290848"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
              >
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">FY'25- H-1B Sponsorship</h3>
                  <span className="text-sm text-gray-600">BioTech, Health Care & Public Admin</span>
                </div>
              </a>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="text-center py-12">
              <span className="text-gray-500 text-lg">No saved items yet</span>
            </div>
          )}

          {activeTab === 'faang' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">FAANG Companies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Google */}
                  <a
                    href="https://careers.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold">G</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Google</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>

                  {/* Amazon */}
                  <a
                    href="https://www.amazon.jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Amazon</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>

                  {/* Meta */}
                  <a
                    href="https://www.metacareers.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold">f</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Meta</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>

                  {/* Apple */}
                  <a
                    href="https://www.apple.com/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.71a6 6 0 0 0 .89-.89l-1.23-1.23a4 4 0 1 1 1.41-1.41l1.23 1.23a6 6 0 0 0-.3.3zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Apple</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>

                  {/* Netflix */}
                  <a
                    href="https://jobs.netflix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Netflix</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>

                  {/* Microsoft */}
                  <a
                    href="https://careers.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 flex items-center justify-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Microsoft</h3>
                    <span className="text-sm text-gray-600">Career opportunities</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'all' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Companies</h3>
                {companies.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {companies.map((company) => (
                      <div
                        key={company.id}
                        className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                      >
                        <div className="w-8 h-8 mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                        <span className="text-sm text-gray-600 mb-2">{company.category}</span>
                        <span className="text-xs text-gray-500">{company.description}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-gray-50 border border-gray-200">
                    <div className="mb-6 p-6 bg-yellow-100 border-2 border-yellow-300 rounded-2xl">
                      <span className="text-2xl font-bold text-yellow-800"> Under Construction</span>
                    </div>
                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">No Companies Added Yet</h4>
                    <span className="text-gray-600 text-center">This section is under construction. Start adding companies to build your list.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'yc' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Y Combinator Startups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="https://www.ycombinator.com/companies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-orange-400 rounded flex items-center justify-center">
                      <span className="text-white font-bold">Y</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">YC Directory</h3>
                    <span className="text-sm text-gray-600">Browse all Y Combinator companies</span>
                  </a>

                  <a
                    href="https://www.ycombinator.com/companies?regions=America%20%2F%20Canada&top_company=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-yellow-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold"></span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Top 81</h3>
                    <span className="text-sm text-gray-600">Top YC companies in America/Canada</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contract' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contract Jobs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="https://contractjobs.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-indigo-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Contract Jobs AI</h3>
                    <span className="text-sm text-gray-600">AI-powered contract job opportunities</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'networking' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Networking Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="https://jugaldb.notion.site/The-Holy-Grail-of-Networking-A-Z-with-templates-1a0af2117b838027aa5cd47911f2a20f#1a0af2117b8380aabad1e9db7564764e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold"></span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Holy Grail of Networking</h3>
                    <span className="text-sm text-gray-600">A-Z networking templates and guides</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'h1b' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">H1B Sponsored Companies</h3>
                <div className="max-h-screen overflow-y-auto border border-gray-200 rounded-2xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredH1bCompanies.length > 0 ? (
                      filteredH1bCompanies.map((company, index) => (
                        <a
                          key={index}
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                        >
                          <div className="w-8 h-8 mb-4 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                          <span className="text-sm text-gray-600">H1B Visa Sponsor</span>
                        </a>
                      ))
                    ) : (
                      <span className="text-gray-500 text-lg col-span-full">No companies found matching "{searchQuery}"</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'opt' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">OPT & STEM OPT Hiring Companies</h3>
                <div className="max-h-screen overflow-y-auto border border-gray-200 rounded-2xl p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredOptCompanies.length > 0 ? (
                      filteredOptCompanies.map((company, index) => (
                        <a
                          key={index}
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                        >
                          <div className="w-8 h-8 mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{company.name.charAt(0)}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                          <span className="text-sm text-gray-600">OPT & STEM OPT Hiring</span>
                        </a>
                      ))
                    ) : (
                      <span className="text-gray-500 text-lg col-span-full">No companies found matching "{searchQuery}"</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recruiter' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">LinkedIn Search Strategies</h3>
                <div className="p-6 rounded-2xl bg-white max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Basic Boolean Operators:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span><strong>AND</strong> - Both terms must appear: Marketing AND Manager</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span><strong>OR</strong> - Either term can appear: Recruiter OR "Talent Acquisition"</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span><strong>NOT</strong> - Excludes terms: Engineer NOT Intern</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span><strong>Quotes</strong> - Exact phrase: "Product Manager"</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span><strong>Parentheses</strong> - Groups terms: (Software OR Hardware) AND Engineer</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Powerful Search Examples:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span><strong>Finding Recruiters:</strong> ("Talent Acquisition" OR Recruiter OR "HR Manager") AND [Company Name]</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span><strong>Finding Hiring Managers:</strong> ("Hiring Manager" OR "Engineering Manager" OR "VP Engineering") AND [Industry]</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span><strong>Finding Alumni:</strong> [Your University] AND ("Software Engineer" OR Developer) AND [Target Company]</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-600 font-bold">•</span>
                          <span><strong>Finding by Seniority:</strong> ("Senior" OR "Lead" OR "Principal") AND [Job Title] AND [Company/Industry]</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Advanced Search Filters:</h5>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold">•</span>
                          <span><strong>Location:</strong> Target specific cities or regions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold">•</span>
                          <span><strong>Company:</strong> Search within specific organizations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold">•</span>
                          <span><strong>Industry:</strong> Filter by relevant sectors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold">•</span>
                          <span><strong>Connection Level:</strong> Focus on 2nd or 3rd connections</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold">•</span>
                          <span><strong>Years of Experience:</strong> Target specific seniority levels</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-900">
                        <strong>Pro Tip:</strong> Use LinkedIn Sales Navigator's free trial for more advanced filtering options!
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Email Finder Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a
                    href="https://www.hunter.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">H</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Hunter.io</h3>
                    <span className="text-sm text-gray-600">Find professional email addresses</span>
                  </a>

                  <a
                    href="https://www.apollo.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Apollo.io</h3>
                    <span className="text-sm text-gray-600">Sales intelligence platform</span>
                  </a>

                  <a
                    href="https://findthatlead.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">F</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">FindThatLead</h3>
                    <span className="text-sm text-gray-600">Email finder & verification</span>
                  </a>

                  <a
                    href="https://www.snov.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Snov.io</h3>
                    <span className="text-sm text-gray-600">Email finder & verifier</span>
                  </a>

                  <a
                    href="https://www.clearbit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 mb-4 bg-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Clearbit</h3>
                    <span className="text-sm text-gray-600">Business intelligence & email finder</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'coldemail' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cold Email Templates</h3>
                <div className="space-y-6">
                  {/* Template 1: General Cold Email */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">General Cold Email Template (Finding Common Ground)</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
                      <div><strong>Subject:</strong> Interest in [Job Position] at [Company Name]</div>
                      <div className="mt-3">Hello [Name],</div>
                      <div className="mt-2">Hope you are doing well!</div>
                      <div className="mt-2">[Find common ground between you and that person to get replies]</div>
                      <div className="mt-2">I'm a [Your Occupation & Specialization]</div>
                      <div className="mt-2">I believe my background in [your skills/experience] is very similar to yours with [their goals and experiences]. I'd love to explore an opportunity to talk to you and connect.</div>
                      <div className="mt-2">Looking forward to your response.</div>
                      <div className="mt-2">Thank you for your time,<br/>[Your Name]</div>
                    </div>
                  </div>

                  {/* Template 2: LinkedIn Hiring Manager */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">LinkedIn Hiring Manager Message</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
                      <div>Hello [Recipient's Name],</div>
                      <div className="mt-2">I hope you're doing well.</div>
                      <div className="mt-2">I recently applied for the [Role] position at [Company], and I wanted to take a moment to express my enthusiasm.</div>
                      <div className="mt-2">Over the past [X years/months], I've [briefly mention one or two relevant achievements, skills, or experiences—e.g., led a project that improved X by Y% or interned at Z where I gained experience in A].</div>
                      <div className="mt-2">What excites me most about this opportunity is [one or two lines about what draws you to the company or role—e.g., the company's mission, growth opportunities, team culture, or specific project].</div>
                      <div className="mt-2">If there's anything I can clarify or expand on, I'd be happy to provide more details. I'd also love the opportunity to connect and learn more about your work at [Company].</div>
                    </div>
                  </div>

                  {/* Template 3: Cold Outreach */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cold Outreach Template</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
                      <div><strong>Subject:</strong> Admiring Your Work at [Company Name]</div>
                      <div className="mt-3">Hello [Name],</div>
                      <div className="mt-2">I've been following your work on [specific project/achievement], and I found it inspiring because [specific reason].</div>
                      <div className="mt-2">I'm a [Your Occupation & Specialization], and I'm interested in the [Job Position] at [Company Name]. I admire [one aspect of their company culture/work that resonates with you].</div>
                      <div className="mt-2">In my recent [project/internship], I [specific achievement]. My strengths in [relevant skills] make me confident that I'd be a strong fit for [Company Name].</div>
                      <div className="mt-2">Would you be open to a 15-minute chat to discuss your experience at [Company Name]?</div>
                      <div className="mt-2">🔗 Role link: [Insert link]<br/>📎 Resume attached</div>
                      <div className="mt-2">Thank you for your time,<br/>[Your Name]</div>
                    </div>
                  </div>

                  {/* Follow-Up Strategy */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow-Up Strategy</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <span className="font-semibold text-gray-900">Timing:</span>
                        <ul className="space-y-1 ml-4 mt-2">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600 font-bold">✔</span>
                            <span>Wait 5-7 business days before following up.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600 font-bold">✔</span>
                            <span>Keep follow-ups brief and reference your previous message.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600 font-bold">✔</span>
                            <span>Maximum 2 follow-ups before moving on.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Follow-Up Email Template */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow-Up Email Template</h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
                      <div><strong>Subject:</strong> Following up on my interest in [Job Position]</div>
                      <div className="mt-3">Hello [Name],</div>
                      <div className="mt-2">I hope you're having a great week. I wanted to follow up on my previous email regarding [Job Position] at [Company Name]. I'm still very interested in the opportunity, particularly in [specific aspect of role/work culture].</div>
                      <div className="mt-2">I understand you're busy, but even a quick 15-minute chat would be greatly appreciated.</div>
                      <div className="mt-2">Best regards,<br/>[Your Name]</div>
                    </div>
                  </div>

                  {/* General Tips */}
                  <div className="p-6 rounded-2xl bg-white">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cold Email Best Practices</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Keep it short (3-4 sentences max) - respect their time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Personalize with specific details about the company/person</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Show value first - what can you offer them?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Include a clear call-to-action (meeting request, call, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Use a professional subject line that stands out</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Follow up after 1 week if no response (max 2-3 follow-ups)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Aim for 10-15% response rate as a good benchmark</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'star' && (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="flex flex-col items-center justify-center gap-8">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl shadow-lg"></div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Coming Soon</h3>
                  <p className="text-gray-600 text-lg">Something amazing is on the way...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}










