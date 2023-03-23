export interface UtilLabGeneratorSchema {
    name: string;
    tags?: string;
    directory?: 'store' | 'api' | 'shared';
}
