import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput', {static: false}) serverContentInput! : ElementRef;
  // newServerName = "";
  newServerContent = "";

  onAddServer(nameInput: HTMLInputElement){
    
    // this.serverCreated.emit({
    //   serverName: this.newServerName, 
    //   serverContent: this.newServerContent
    // });
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    // this.blueprintCreated.emit({
    //   serverName: this.newServerName, 
    //   serverContent: this.newServerContent
    // });
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
