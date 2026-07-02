import type { Node } from '@xyflow/react';
export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 500 },
    data: {
      label: 'Design & Concept',
      department: null,
      color: 'bg-blue-300',
    },

    type: 'rectangle',
  },
  {
    id: '2',
    position: { x: 250, y: 462 },
    data: {
      label: 'Design & HOD Approvals',
      deparment: null,
      color: 'bg-blue-300',
    },
    type: 'diamond',
  },
  {
    id: '3',
    position: { x: 450, y: 462 },
    data: {
      label: 'Budgeting & HOD Approvals',
      deparment: null,
      color: 'bg-blue-300',
    },
    type: 'diamond',
  },
  {
    id: '4',
    position: { x: 650, y: 462 },
    data: {
      label: 'Topology Based Approvals',
      deparment: null,
      color: 'bg-blue-300',
    },
    type: 'diamond',
  },
  {
    id: '5',
    position: { x: 900, y: 462 },
    data: {
      label: 'Technical Design HOD Approvals',
      deparment: null,
      color: 'bg-blue-300',
    },
    type: 'diamond',
  },
  {
    id: '6',
    position: { x: 1100, y: 460 },
    data: { label: 'Parallel Task', deparment: null, border: true },
    type: 'circle',
  },
  {
    id: '7',
    position: { x: 1400, y: -200 },
    data: {
      label: 'TECHNICAL DESIGN',
      text: 'Uploaddocuments &Consultant letter',
      color: 'bg-green-200',
      department: 'planning',
    },
    type: 'rectangle',
  },

  {
    id: '8',
    position: { x: 1180, y: -300 },
    data: {
      label: 'SALESFORCE',
      color: 'bg-green-200',
      text: 'Create the property ID & Location ID using API',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '9',
    position: { x: 1680, y: -380 },
    data: {
      label: 'TECHNICALVERIFIER',
      color: 'bg-green-200',
      text: 'Create the property ID & Location ID using API',
      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '10',
    position: { x: 1680, y: -10 },
    data: {
      label: 'SALES ADMIN',
      color: 'bg-green-200',
      text: 'Approval',
      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '11',
    position: { x: 2000, y: -380 },
    data: {
      label: 'SALES ADMIN',
      color: 'bg-green-200',
      text: 'Approval',
      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '12',
    position: { x: 1400, y: 200 },
    data: {
      label: 'Consultant Letter Upload Tasks ends',
      color: 'bg-blue-200',
      text: 'Approval',
      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '13',
    position: { x: 1680, y: 200 },
    data: {
      label: 'Layout & Unit plan upload',
      color: 'bg-blue-200',
      text: 'Task Ends',
      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '14',
    position: { x: 2250, y: -380 },
    data: {
      label: 'Inventory Upload',
      color: 'bg-blue-200',
      text: 'Task Ends',
      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '15',
    position: { x: 1960, y: -180 },
    data: {
      label: 'SALES OPS PRICING',
      color: 'bg-blue-200',
      text: 'Validate DocumentUpload & mark taskas completed',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '16',
    position: { x: 2260, y: -170 },
    data: {
      label: 'Inventory live in',
      color: 'bg-green-200',
      text: 'SALESFORCE',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '17',
    position: { x: 2560, y: -180 },
    data: {
      label: 'SALESOPS PRICING',
      color: 'bg-green-200',
      text: 'Calculate pricing & Create payment plan',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '18',
    position: { x: 2860, y: -180 },
    data: {
      label: 'CHAIRMAN',
      color: 'bg-green-200',
      text: 'IOM Approval',
      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '19',
    position: { x: 3060, y: -180 },
    data: {
      label: 'SALES OPs',
      color: 'bg-blue-200',
      text: 'Mark Pricing andPayment Planapproval asComplete in Pega',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '20',
    position: { x: 3300, y: -180 },
    data: {
      label: 'SALES ADMIN',
      color: 'bg-green-200',
      text: 'Upload Pricing,Validates it & TagPayment plan foreach unit',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '21',
    position: { x: 3550, y: -180 },
    data: {
      label: 'MIS HOD',
      color: 'bg-blue-200',
      text: 'Validates the pricing uploaded in Salesforce& Marks the Pega taskcomplete via Email',
      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '22',
    position: { x: 3340, y: -10 },
    data: {
      label: 'Upload Pricing taskEnds',
      color: 'bg-blue-200',
      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '23',
    position: { x: 2600, y: 180 },
    data: {
      label: 'Add Syncback toSalesforce',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '24',
    position: { x: 1500, y: 370 },
    data: {
      label: 'MARKETING',
      text: 'Enter theirEstimatedCompletion Date',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '25',
    position: { x: 1750, y: 370 },
    data: {
      label: 'MARKETING',
      text: 'Mark the completion ofMarketing MaterialReadiness',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '26',
    position: { x: 2000, y: 370 },
    data: {
      label: 'DIGITAL MARKETING',
      text: 'Creative Adaptation Preparation',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '27',
    position: { x: 2800, y: 380 },
    data: {
      label: 'CREATIVE HEAD',
      text: 'Approval of Adaptations',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '28',
    position: { x: 3050, y: 380 },
    data: {
      label: 'DIGITAL MARKETING',
      text: 'Campaign Execution',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '29',
    position: { x: 3600, y: 350 },
    data: {
      label: 'Marketing Launch Ready',
      // text: 'Campaign Execution',
      color: 'bg-orange-300',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '30',
    position: { x: 1500, y: 580 },
    data: {
      label: 'CENTRAL PLANNING',
      text: 'Calculate ACD',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '31',
    position: { x: 1900, y: 550 },
    data: {
      label: 'HOD Approval',
      // text: 'Calculate ACD',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '32',
    position: { x: 2300, y: 550 },
    data: {
      label: 'CPO ',
      text: 'Approval',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '33',
    position: { x: 2500, y: 600 },
    data: {
      label: 'Upload ACD to PMWeb ',
      // text: 'Approval',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '34',
    position: { x: 3000, y: 550 },
    data: {
      label: 'PEGA validates the PM Web Upload and auto Close the task',
      // text: 'Approval',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '35',
    position: { x: 1500, y: 820 },
    data: {
      label: 'TREASURY',
      text: 'Open CorporateBank Account andmark task ascomplete',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '36',
    position: { x: 1800, y: 780 },
    data: {
      label: 'TREASURY',
      text: 'Obtain bankguarantee letterfor EscrowAccount openingand mark task ascomplete',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '37',
    position: { x: 1600, y: 980 },
    data: {
      label: 'CREDIT CONTROL',
      text: 'Obtain requireddocuments** forRERA registration &marks the task ascomplete',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '38',
    position: { x: 1900, y: 980 },
    data: {
      label: 'CREDIT CONTROL',
      text: 'Upload RERAcertificate & ProjectDetails',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '39',
    position: { x: 3340, y: 960 },
    data: {
      label: 'CREDIT CONTROL HOD',
      text: 'Approval',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '40',
    position: { x: 1700, y: 1300 },
    data: {
      label: 'TREASURY',
      text: 'Open the ESCROWaccount with the bankidentified for theProject and mark taskas complete',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '41',
    position: { x: 1950, y: 1300 },
    data: {
      label: 'FINANCE',
      text: 'Create Account GLCode via API & Autocomplete the taskafter Account GL iscreated',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '42',
    position: { x: 2200, y: 1300 },
    data: {
      label: 'TREASURY',
      text: 'Assign the ESCROWaccount in fusion &Auto complete thetask after EscrowAccount is created',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '43',
    position: { x: 2500, y: 1300 },
    data: {
      label: 'FINANCE AR',
      text: 'Upload VA in Fusion.Configure DLD &Other charges',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '44',
    position: { x: 2750, y: 1300 },
    data: {
      label: 'FINANCE APP',
      text: 'Configure ReceiptMethods in fusion',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '45',
    position: { x: 2540, y: 1450 },
    data: {
      // label: 'Task is auto-marked ascomplete inPega',
      text: 'Task is auto-marked ascomplete inPega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '46',
    position: { x: 2790, y: 1450 },
    data: {
      // label: 'FINANCE APP',
      text: 'Task is auto-marked ascomplete inPega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '47',
    position: { x: 3050, y: 1550 },
    data: {
      // label: 'FINANCE APP',
      text: 'Finance TEAM Task Ends',
      color: 'bg-orange-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '48',
    position: { x: 1700, y: 1650 },
    data: {
      label: 'FINANCE',
      text: 'Create Project GLCode & Autocomplete the taskafter Project GL iscreated',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '49',
    position: { x: 2000, y: 1650 },
    data: {
      label: 'FINANCE',
      text: 'Maps the ProjectGL Code to theinventory andmarks the task ascomplete',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '50',
    position: { x: 2250, y: 1650 },
    data: {
      label: 'FINANCE AR',
      text: 'Upload CVA inFusion. ConfigureDLD & Other charges',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '51',
    position: { x: 2550, y: 1730 },
    data: {
      // label: 'FINANCE AR',
      text: 'Task is auto-marked ascomplete inPega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '52',
    position: { x: 2040, y: 1850 },
    data: {
      // label: 'FINANCE AR',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '53',
    position: { x: 2250, y: 1950 },
    data: {
      label: 'FINANCE APP',
      text: 'Configure Receipt Methods with corporate bank account',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '54',
    position: { x: 2290, y: 2080 },
    data: {
      // label: 'FINANCE AR',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '55',
    position: { x: 2650, y: 1935 },
    data: {
      // label: 'FINANCE AR',
      text: 'Fin App Task Ends',
      color: 'bg-red-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '56',
    position: { x: 3900, y: 650 },
    data: {
      label: 'SALES ADMIN',
      text: 'Test Booking by releasing Unit',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '57',
    position: { x: 4160, y: 650 },
    data: {
      label: 'MID OFFICE',
      text: 'Verify URRF',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '58',
    position: { x: 4200, y: 480 },
    data: {
      // label: 'MID OFFICE',
      text: 'Task is auto-marked ascomplete inPega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '59',
    position: { x: 4560, y: 600 },
    data: {
      label: 'SALES OPS HOD',
      text: 'Approval via email',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '60',
    position: { x: 4980, y: 650 },
    data: {
      label: 'SALES ADMIN',
      text: 'Cancel Test Booking',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '61',
    position: { x: 5020, y: 480 },
    data: {
      // label: 'MID OFFICE',
      text: 'Task is auto-marked ascomplete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '62',
    position: { x: 5500, y: 630 },
    data: {
      // label: 'MID OFFICE',
      text: 'Booking Launch Ready',
      color: 'bg-red-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '63',
    position: { x: 3900, y: 1000 },
    data: {
      label: 'LEGAL',
      text: 'Confirms Draft SPA creation',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '64',
    position: { x: 4300, y: 780 },
    data: {
      label: 'SALESFORCE IT',
      text: 'Uploads draft SPA',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '65',
    position: { x: 4300, y: 980 },
    data: {
      label: 'CONTRACTS/CDC',
      text: 'Confirms Completion of Draft SPA Validation & Watermark Addition',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '66',
    position: { x: 4640, y: 800 },
    data: {
      // label: 'SALES ADMIN',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '67',
    position: { x: 4600, y: 1000 },
    data: {
      label: 'SALES ADMIN',
      text: 'Test Booking by releasing Unit',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '68',
    position: { x: 4640, y: 1150 },
    data: {
      // label: 'SALES ADMIN',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '69',
    position: { x: 5000, y: 1000 },
    data: {
      label: 'MID OFFICE',
      text: 'Verify URRF & SPA in Salesforce',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '70',
    position: { x: 5040, y: 800 },
    data: {
      // label: 'SALES ADMIN',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '71',
    position: { x: 5300, y: 1000 },
    data: {
      label: 'SALES OPS HOD',
      text: 'Approval via email',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '72',
    position: { x: 5800, y: 1050 },
    data: {
      label: 'LEGAL HOD',
      text: 'Approval on test SPA',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'diamond',
  },
  {
    id: '73',
    position: { x: 6100, y: 1030 },
    data: {
      label: 'SALES ADMIN',
      text: 'Cancel Test Booking',
      color: 'bg-green-200',

      department: 'planning',
    },
    type: 'rectangle',
  },
  {
    id: '74',
    position: { x: 6140, y: 1200 },
    data: {
      // label: 'SALES ADMIN',
      text: 'Task is auto-marked as complete in Pega',
      color: 'bg-blue-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '75',
    position: { x: 6500, y: 1000 },
    data: {
      // label: 'SALES ADMIN',
      text: 'SPA & Booking Launch Ready',
      color: 'bg-red-200',

      department: 'planning',
    },
    type: 'circle',
  },
  {
    id: '76',
    position: { x: 7000, y: 1550 },
    data: {
      // label: 'SALES ADMIN',
      text: 'Ready to Accept Bookings',
      color: 'bg-orange-300',

      department: 'planning',
    },
    type: 'circle',
  },
];
