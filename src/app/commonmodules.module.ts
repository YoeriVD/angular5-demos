import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from './grid'
import { SdUiModule } from '@sdworx/sd-components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const exportModules = [ReactiveFormsModule, GridModule, BrowserModule, HttpClientModule,SdUiModule, NgbModule]

@NgModule({
    imports: exportModules,
    exports: exportModules,
    declarations: [],
    providers: [],
})
export class CommonImportsModule { }
