interface Applicant {
  id: string;
  DateOfApplication: string | number;
  name: string;
  gender: string;
  DateOfBirth: string | number;
  phone: string | number;
  email: string;
  transportation: string;
  address: string;
  isChecked: string;
}

interface FilterDashboardApplicantData {
  name: string;
  sort: "asc" | "desc";
  address: string;
  recruitment: 1 | 2;
}

export { Applicant, FilterDashboardApplicantData };
