/**
 * @jest-environment jsdom
 */

import * as app from '../src/app';

describe('App functions tests suite', () => {
  it('creates a new todo object', () => {
    document.body.innerHTML = '<div class="col bg-warning p-0" id="projectScreen"></div>';
    const actual = app.addingProjBtn();
    expect(actual.innerHTML).toMatch(/addProjBtn/);
  });

  it('displays new project form', () => {
    document.body.innerHTML = '<div id="projectScreen"></div>';
    const actual = app.addProjFrm();
    expect(actual.outerHTML).toMatch('<form><input type="text" placeholder="Name"><button type="button">Create</button></form>');
  });

  it('creates HTML app skeleton', () => {
    const actual = app.appStructureCaller();
    expect(actual.innerHTML).toMatch('<div class="container-fluid"><div class="row" id="divContainer"><div class="col bg-warning p-0" id="projectScreen"><ul id="projectsList"></ul></div><div class="col bg-danger p-0" id="todoScreen"></div><div class="col bg-dark p-0" style="color: white;" id="detailsScreen"></div></div></div>');
  });
});