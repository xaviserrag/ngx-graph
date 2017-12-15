import { OnInit } from '@angular/core';
export declare class AppComponent implements OnInit {
    version: string;
    theme: string;
    chartType: string;
    chartGroups: any;
    chart: any;
    realTimeData: boolean;
    countries: any[];
    graph: {
        links: any[];
        nodes: any[];
    };
    hierarchialGraph: {
        links: any[];
        nodes: any[];
    };
    view: any[];
    width: number;
    height: number;
    fitContainer: boolean;
    autoZoom: boolean;
    showLegend: boolean;
    orientation: string;
    orientations: any[];
    curveType: string;
    curve: any;
    interpolationTypes: string[];
    colorSets: any;
    colorScheme: any;
    schemeType: string;
    selectedColorScheme: string;
    constructor();
    ngOnInit(): void;
    updateData(): void;
    applyDimensions(): void;
    toggleFitContainer(fitContainer: boolean, autoZoom: boolean): void;
    selectChart(chartSelector: any): void;
    select(data: any): void;
    setColorScheme(name: any): void;
    setInterpolationType(curveType: any): void;
    onLegendLabelClick(entry: any): void;
    toggleExpand(node: any): void;
}
