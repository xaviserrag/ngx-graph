export declare const countries: string[];
export declare function generateGraph(nodeCount: number): {
    links: any[];
    nodes: any[];
};
export declare function generateHierarchialGraph(): {
    links: {
        source: string;
        target: string;
    }[];
    nodes: {
        id: string;
        label: string;
    }[];
};
export declare function getTurbineData(): {
    nodes: any[];
    links: any[];
};
