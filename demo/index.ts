import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {ChartsSectionComponent} from './components/charts-section';
import {DemoHeaderComponent} from './components/demo-header';
const gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <demo-header>Loading header</demo-header>

  <main class="bd-pageheader">
    <div class="container">
      <img src="http://www.chartjs.org/img/chartjs-logo.svg" alt="" style="background: url('//angular.io/resources/images/logos/angular2/angular.svg') top center no-repeat;background-size: contain;">
      <h1>ng2-charts</h1>
      <p>Angular2 directives for <a href="http://www.chartjs.org/" style="color:white">Chart.js</a></p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-charts">View on GitHub</a>
      <div class="row">
      <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-charts&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-charts&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <charts-section class="col-md-12"></charts-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-charts">ng2-charts</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `,
  directives: [
    NgClass,
    DemoHeaderComponent,
    ChartsSectionComponent
  ]
})
export class DemoComponent {
}

bootstrap(DemoComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
