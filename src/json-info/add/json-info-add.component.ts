import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { JsonInfo } from '../json-info.model';

@Component({
    selector: 'app-json-info-add',
    templateUrl: './json-info-add.component.html'
})
export class JsonInfoAddComponent implements OnInit {

    jsonInfoFormGroup: FormGroup;
    value: string = '';
    valueOutput: any = [];
    label: string = '';
    input: string = '';
    dropdown: any;
    checkbox: any;
    jsonObject = JSON.stringify([{ "label": "JSON Object" },
    { "input": "Header Input" },
    { "dropdown": ["First Option", "Second Option", "Third Option"] },
    { "checkbox": ["Checkbox 1", "Checkbox 2", "Checkbox3"] }])

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        let jsonInfo = new JsonInfo();
        this.jsonInfoFormGroup = this.formBuilder.formGroup(jsonInfo);
    }

    valueChanged(value: string) {
        this.value = value;
        this.valueOutput = JSON.parse(this.value);
    }

    onSubmit() {
        this.label = this.valueOutput[0].label;
        this.input = this.valueOutput[1].input;
        this.dropdown = this.valueOutput[2].dropdown;
        this.checkbox = this.valueOutput[3].checkbox;
    }
}
