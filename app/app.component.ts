import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedRows;
  countries;
  emptyMsg: string = 'loading...';
  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.countries = [
        { 'country': 'Afghanistan', 'population': 35530081, 'capital': 'Kabul', 'continent': 'Asia', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/2000px-Flag_of_Afghanistan.svg.png' },
        { 'country': 'India', 'population': 1339180127, 'capital': 'New Delhi', 'continent': 'Asia', 'flag': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' },
        { 'country': 'Iraq', 'population': 38274618, 'capital': 'Baghdad', 'continent': 'Asia', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png' },
        { 'country': 'Bhutan', 'population': 807610, 'capital': 'Thimphu', 'continent': 'Asia', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/255px-Flag_of_Bhutan.svg.png' },
        { 'country': 'Pakistan', 'population': 197015955, 'capital': 'Islamabad', 'continent': 'Asia', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2000px-Flag_of_Pakistan.svg.png' },
        { 'country': 'France', 'population': 64979548, 'capital': 'Paris', 'continent': 'Europe', 'flag': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png' },
        { 'country': 'Germany', 'population': 82114224, 'capital': 'Berlin', 'continent': 'Europe', 'flag': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' },
        { 'country': 'Ireland', 'population': 4761657, 'capital': 'Dublin', 'continent': 'Europe', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/255px-Flag_of_Ireland.svg.png' },
        { 'country': 'Austria', 'population': 8735453, 'capital': 'Vienna', 'continent': 'Europe', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/255px-Flag_of_Austria.svg.png' },
        { 'country': 'Bulgaria', 'population': 7084571, 'capital': 'Sofia', 'continent': 'Europe', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/2000px-Flag_of_Bulgaria.svg.png' },
        { 'country': 'Cuba', 'population': 11484636, 'capital': 'Havana', 'continent': 'America', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/2000px-Flag_of_Cuba.svg.png' },
        { 'country': 'Canada', 'population': 36624199, 'capital': 'Ottawa', 'continent': 'America', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png' },
        { 'country': 'Jamaica', 'population': 2890299, 'capital': 'Kingston', 'continent': 'America', 'flag': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png' }
      ];
    }, 2000);

  }

  changeSort(event) {
    console.log('sort', event);
  };

  rowClick(event) {
    console.log('click', event);
  }

  rowSelect(event) {
    console.log('select', event);
  }

  rowUnselect(event) {
    console.log('unselect', event);
  }

  onSelectionChange(event) {
    console.log('selectionChange', event);
  }

  flagHeaderClick(col) {
    console.log('flagHeaderClick ==>', col);
  }

  flagClicked(event, row) {
    console.log('flagClicked ==>', row);
  }

  rowExpanded(event) {
    console.log('expanded', event);
  }

  rowCollapse(event) {
    console.log('collapse', event);
  }

  editInit(event) {
    console.log('edit Init');
    console.log(event);
  }

  editComplete(event) {
    console.log('edit complete')
    console.log(event);
  }

  edit(event) {
    console.log('Edit');
    console.log(event);
  }

  editCancel(event) {
    console.log('edit cancel');
    console.log(event);
  }

  valueChange(event) {
    console.log('valueChange', event);
  }

  onFilter(val) {
    console.log('filter change', val);
    if (!val.length)
      this.emptyMsg = 'No data found';
    else
      this.emptyMsg = '';
  }

  tableReload() {
    console.log('reload logic');
  }

  onPage(val) {
    console.log('pagechange', val);
  }
}
