export enum SeverityLevel {
  unknown = '30',
  ok = '60',
  warning = '70',
  criticalAcknowledged = '80',
  critical = '90',
}

export interface Row {
  url: string;
  company_blacklists: string;
  port_blacklists: string;
  country_blacklists: string;
  ship_blacklists: string;
  id: string;
  created: Date;
  modified: Date;
  name: string;
  company_check_prior_months: number;
  company_check_prior_months_severity: SeverityLevel | null;
  company_check_severity: SeverityLevel | null;
  company_check_severity_technical_manager: SeverityLevel | null;
  company_check_severity_technical_manager_sdn: SeverityLevel | null;
  company_check_severity_technical_manager_generic: SeverityLevel | null;
  company_check_severity_group_beneficial_owner: SeverityLevel | null;
  company_check_severity_group_beneficial_owner_sdn: SeverityLevel | null;
  company_check_severity_group_beneficial_owner_generic: SeverityLevel | null;
  company_check_severity_ship_manager: SeverityLevel | null;
  company_check_severity_ship_manager_sdn: SeverityLevel | null;
  company_check_severity_ship_manager_generic: SeverityLevel | null;
  company_check_severity_operator: SeverityLevel | null;
  company_check_severity_operator_sdn: SeverityLevel | null;
  company_check_severity_operator_generic: SeverityLevel | null;
  company_check_severity_registered_owner: SeverityLevel | null;
  company_check_severity_registered_owner_sdn: SeverityLevel | null;
  company_check_severity_registered_owner_generic: SeverityLevel | null;
  country_check_severity: SeverityLevel | null;
  country_check_unknown_severity: SeverityLevel | null;
  ship_sanction_check_severity: SeverityLevel | null;
  ship_sanction_check_severity_sdn: SeverityLevel | null;
  ship_sanction_check_severity_generic: SeverityLevel | null;
  ship_sanction_prior_months: number | null;
  ship_sanction_prior_months_severity: SeverityLevel | null;
  port_visit_severity: SeverityLevel | null;
  no_ais_position_severity: SeverityLevel | null;
  zone_severity: SeverityLevel | null;
  ship_inspection_detained: SeverityLevel | null;
  ship_inspection_deficiency: SeverityLevel | null;
}
