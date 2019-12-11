import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements AfterViewInit {
    @ViewChild('textField', { static: false }) textField: ElementRef

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.textField.nativeElement.focus()
        }, 100)
    }
}
