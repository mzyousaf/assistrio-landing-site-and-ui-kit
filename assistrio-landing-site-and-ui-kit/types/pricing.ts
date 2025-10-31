export interface FeatureValue {
    kind: 'boolean' | 'count' | 'enum' | 'status' | 'size';
    value?: boolean | number | string;
    unlimited?: boolean;
    period?: string | null;
    scope?: string | null;
    state?: string;
}

export interface Feature {
    _id: string;
    name: string;
    code: string;
    description: string;
    category: string;
    group: string;
    kind: 'boolean' | 'count' | 'enum' | 'status' | 'size';
    unit?: string;
    enumOptions?: string[];
    sortOrder?: number;
    defaultPeriod?: string | null;
    defaultScope?: string | null;
    meterKey?: string | null;
    isCustomizable?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface PlanFeature {
    feature: Feature;
    value: FeatureValue;
    highlight: boolean;
}

export interface Plan {
    _id: string;
    name: string;
    code: string;
    description: string;
    planType: string;
    interval: string;
    priceCents: number;
    currency: string;
    isActive?: boolean;
    isPublic?: boolean;
    planVersion?: number;
    createdAt?: string;
    updatedAt?: string;
    features: PlanFeature[];
}

export interface ApiResponse {
    status: number;
    success: boolean;
    message: string;
    data: Plan[];
}
