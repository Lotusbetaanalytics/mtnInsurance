const AssetType: any = [
    {
        value: "Private Motor",
    },
    {
        value: "Commercial Motor",
    },
    {
        value: "Boat"
    },
    {
        value: "Motorcycle"
    },
    {
        value: "Status Vehicle"
    },
    {
        value: "Staff Laptop"
    },
    {
        value: "Sim Reg Device"
    },
    {
        value: "Transmission Equipment"
    },
    {
        value: "Batteries & Rectifiers"
    },
    {
        value: "Other Asset"
    },

];


const IncidentType: any = [
    {
        value: "Motor Accident",
    },
    {
        value: "Motor Theft",
    },
    {
        value: "Fire"
    },
    {
        value: "Theft (Asset)"
    },
    {
        value: "Accidental Damage (Asset)"
    },
    {
        value: "Voltage Surge"
    },
    {
        value: "Flood"
    },
    {
        value: "Water Ingress"
    },
    {
        value: "Tower Collapse"
    },
    {
        value: "Vandalism"
    },
    {
        value: "Insurgent Attack"
    },
    {
        value: "Storm"
    },
    {
        value: "Other Loss/Damage"
    },
];



const Status: any = [
    { value: "Outstanding" },
    { value: "Awaiting Offer" },
    { value: "Awaiting Payment" },
    { value: "Settled" },
    { value: "Closed" },
    { value: "Below Excess" },
    { value: "No Affected MTN Asset" },

];


const Dc: any = [
    { value: "Yes" },
    { value: "No" },
];

const report: any = [
    { value: "Yes" },
    { value: "No" },
    { value: "Not Applicable" },
];

const region: any = [
    { value: "Abuja" },
    { value: "Asaba" },
    { value: "Enugu" },
    { value: "Ibadan" },
    { value: "Kano" },
    { value: "Lagos" },
    { value: "Port-Harcourt" },
];

const policyType: any = [
    { value: "Life" },
    { value: "Motor" },
    { value: "Property/Business " },
    { value: "Interruption" },
    { value: "Travel" },
    { value: "Personal Accident" },
    { value: "Liability" },
    { value: "Fraud/Money" },
    { value: "Miscellaneous/Other" },
];

const currency: any = [
    { value: "NGN" },
    { value: "USD" },
    { value: "EUR" },
    { value: "GBP" },
    { value: "RAND" },

];
const vendorStatus: any = [
    { value: "Awaiting Insurance Policy" },
    { value: "Under Review" },
    { value: "Approved" },

];
const surveyType: any = [
    { value: "Group" },
    { value: "Local" },
    { value: "Internal" },

];

const surveyStatus: any = [
    { value: "Open" },
    { value: "In-progress" },
    { value: "Closed" },

];


export default { AssetType, IncidentType, Status, Dc, report, region, policyType, currency, vendorStatus, surveyStatus, surveyType };