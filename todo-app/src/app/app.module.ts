import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MyCommonModule } from "common-lib";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyCommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
