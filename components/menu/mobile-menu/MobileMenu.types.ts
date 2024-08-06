export type MobileMenuModel = {
    title: string;
    isParent: boolean;
    children?: MobileMenuModel[];
    to?: string;
}