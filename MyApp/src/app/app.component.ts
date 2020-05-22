import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div style="text-align: center">
        <h2>Here are some links to help you start: </h2>

        <ul>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial"> Tour of Heroes</a></h2>
          </li>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://angular.io/cli"> CLI Documantation</a></h2>
          </li>
          <li>
            <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/tutorial">Angular blog</a></h2>
          </li>
        </ul>
      </div>

    <div style="text-align: center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display:block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo"
           src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg">
    </div>
    <div style="text-align: center" class="content">
      <h1>Это приложение было создано автоматически</h1>
      </div>
    `,
  styles: []
})
export class AppComponent {
  title = 'MyApp';
}
