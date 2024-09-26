import * as i0 from '@angular/core';
import { Injectable, Inject, Component, NgModule } from '@angular/core';

class IhChatService {
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

class IhChatComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: IhChatComponent, selector: "ih-chat-ih-chat", ngImport: i0, template: `
    <p>
      ih-chat works!
    </p>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IhChatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ih-chat-ih-chat', template: `
    <p>
      ih-chat works!
    </p>
  ` }]
        }] });

class IhChatModule {
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

/*
 * Public API Surface of ih-chat
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IhChatComponent, IhChatModule, IhChatService };
//# sourceMappingURL=ih-chat.mjs.map
