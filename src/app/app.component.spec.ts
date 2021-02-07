import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture } from '@angular/core/testing'

import { configureTests, ConfigureFn } from '../../test-config.helper'

import { AppComponent } from './app.component';

describe('Component snapshots', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(
        waitForAsync(() => {
            const configure: ConfigureFn = testBed => {
                testBed.configureTestingModule({
                    declarations: [AppComponent],
                    schemas: [NO_ERRORS_SCHEMA],
                });
            };

            configureTests(configure).then(testBed => {
                fixture = testBed.createComponent(AppComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
        })
    );

    it("can run a test", () => {
        expect(1).toEqual(1);
    });

})