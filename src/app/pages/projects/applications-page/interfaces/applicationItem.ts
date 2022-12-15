export type ApplicationAction = {
  actionTitle: string;
  action: Function;
};

export interface ApplicationItem {
  displayName: string;
  description: string;
  actions: ApplicationAction[];
}
