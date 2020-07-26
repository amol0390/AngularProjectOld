//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './top-menu.component';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
})
export class App {
    menuItems = [
    {
      text: 'File',
      items: [
        {
          text: 'Share'
        },
        {
          text: 'New',
          icon: 'arrow_right',
          items: [
            {
              text: 'Document'
            },
            {
              text: 'New',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                },
                {
                  text: 'Document',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document 1'
                    },
                    {
                      text: 'Document 2'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Spreadsheet'
            },
            {
              text: 'Presentation',
              icon: 'arrow_right',
              items: [
                {
                  text: 'New',
                  icon: 'arrow_right',
                  items: [
                    {
                      text: 'Document'
                    },
                    {
                      text: 'Spreadsheet'
                    }
                  ]
                }
              ]
            },
            {
              text: 'Form'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Open',
          extraText: 'Ctrl+O'
        },
        {
          text: 'Rename',
          disabled: true
        },
        {
          divider: true
        },
        {
          text: 'Print',
          extraText: 'Ctrl+P'
        }
      ]
    },
    {
      text: 'Edit',
      items: [
        {
          text: 'Undo',
          extraText: 'Ctrl+Z'
        },
        {
          text: 'Redo',
          extraText: 'Ctrl+Y'
        },
        {
          divider: true
        },
        {
          text: 'Cut',
          extraText: 'Ctrl+X'
        },
        {
          text: 'Copy',
          extraText: 'Ctrl+C'
        },
        {
          text: 'Paste',
          extraText: 'Ctrl+P'
        },
        {
          divider: true
        },
        {
          text: 'Find and replace...',
          extraText: 'Ctrl+Shift+H'
        }
      ]
    },
    {
      text: 'View',
      items: [
        {
          text: 'Print layout'
        },
        {
          text: 'Mode',
          icon: 'arrow_right',
          items: [
            {
              text: 'Presentation'
            },
            {
              text: 'Edit'
            },
            {
              text: 'Modifiable'
            }
          ]
        },
        {
          divider: true
        },
        {
          text: 'Show ruler'
        },
        {
          text: 'Show equation toolbar'
        },
        {
          text: 'Show spelling suggestions'
        },
        {
          divider: true
        },
        {
          text: 'Compact controls'
        },
        {
          text: 'Full screen'
        },
      ]
    },
    {
      text: 'Format',
      items: [
        {
          text: 'Bold',
          extraText: 'Ctrl+B'
        },
        {
          text: 'Italic',
          extraText: 'Ctrl+I'
        },
        {
          text: 'Underline',
          extraText: 'Ctrl+U'
        },
        {
          text: 'Strikethrough',
          extraText: 'Alt+Shift+5'
        },
        {
          text: 'Superscript',
          extraText: 'Ctrl+.'
        },
        {
          text: 'Subscript',
          extraText: 'Ctrl+,'
        },
        {
          divider: true
        },
        {
          text: 'Clear Formatting'
        },
      ]
    }
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule
  ],
  declarations: [ App, TopMenuComponent],
  bootstrap:    [ App ]
})
export class AppModule { }