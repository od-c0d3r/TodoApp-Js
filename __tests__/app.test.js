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
});