import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IhChatService {
    config;
    constructor(config) {
        this.config = config;
        console.log('Chat Service Initialized with config:', config);
    }
    trackEvent(event) {
        console.log(`Tracking Event: ${event}, ID: ${this.config.trackingId}, Env: ${this.config.env}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatService, deps: [{ token: 'ChatConfig' }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['ChatConfig']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWgtY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaWgtY2hhdC9zcmMvbGliL2loLWNoYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLGFBQWE7SUFFa0I7SUFBMUMsWUFBMEMsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDO3VHQVJVLGFBQWEsa0JBRUosWUFBWTsyR0FGckIsYUFBYSxjQUZaLE1BQU07OzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFHYyxNQUFNOzJCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSWhDaGF0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQ2hhdENvbmZpZycpIHByaXZhdGUgY29uZmlnOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhdCBTZXJ2aWNlIEluaXRpYWxpemVkIHdpdGggY29uZmlnOicsIGNvbmZpZyk7XG4gIH1cblxuICB0cmFja0V2ZW50KGV2ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgVHJhY2tpbmcgRXZlbnQ6ICR7ZXZlbnR9LCBJRDogJHt0aGlzLmNvbmZpZy50cmFja2luZ0lkfSwgRW52OiAke3RoaXMuY29uZmlnLmVudn1gKTtcbiAgfVxufVxuIl19