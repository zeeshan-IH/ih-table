import { NgModule } from '@angular/core';
import { IhChatComponent } from './ih-chat.component';
import { IhChatService } from './ih-chat.service';
import * as i0 from "@angular/core";
export class IhChatModule {
    static forRoot(config) {
        return {
            ngModule: IhChatModule,
            providers: [
                IhChatService,
                { provide: 'ChatConfig', useValue: config }
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: IhChatModule, declarations: [IhChatComponent], exports: [IhChatComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IhChatComponent
                    ],
                    imports: [],
                    exports: [
                        IhChatComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWgtY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9paC1jaGF0L3NyYy9saWIvaWgtY2hhdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWNsRCxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQVc7UUFDeEIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhO2dCQUNiLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzVDO1NBQ0YsQ0FBQztJQUNKLENBQUM7dUdBVFUsWUFBWTt3R0FBWixZQUFZLGlCQVJyQixlQUFlLGFBS2YsZUFBZTt3R0FHTixZQUFZOzsyRkFBWixZQUFZO2tCQVZ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWhDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9paC1jaGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJaENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9paC1jaGF0LnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSWhDaGF0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEloQ2hhdENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEloQ2hhdE1vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJaENoYXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSWhDaGF0U2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnQ2hhdENvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==