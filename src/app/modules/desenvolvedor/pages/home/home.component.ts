import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Developer } from '../../developer.model';
import { DeveloperService } from '../../services/developer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  developers: Developer[] = [];

  developer: Developer = {
    name: '',
    genre: '',
    birth: '',
    age: '0',
    hobby: '',
    levelId: '0',
  }

  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
    this.developerService.getAll().subscribe((data) =>  {
      this.developers = data;
    })
  }

  createDeveloper(): void {
    if(this.developer.id) {
      this.editDeveloper()
      return;
    }
    this.developerService.create({
      name: this.developer.name,
      genre: this.developer.genre,
      birth: this.developer.birth,
      age: Number(this.developer.age),
      hobby: this.developer.hobby,
      levelId: Number(this.developer.levelId)}).subscribe((data) =>  {
      this.developerService.getAll().subscribe((data) =>  {
        this.developers = data;
      })
      this.developer = {
        name: '',
        genre: '',
        birth: '',
        age: '0',
        hobby: '',
        levelId: '0',};
    })
  }

  editDeveloper(): void {
    this.developerService.update(this.developer.id, {
      name: this.developer.name,
      genre: this.developer.genre,
      birth: this.developer.birth,
      age: Number(this.developer.age),
      hobby: this.developer.hobby,
      levelId: Number(this.developer.levelId),}).subscribe((data) =>  {
      this.developerService.getAll().subscribe((data) =>  {
        this.developers = data;
      })
      this.developer = {
        name: '',
        genre: '',
        birth: '',
        age: '0',
        hobby: '',
        levelId: '0',};
    })
  }

  removeDeveloper(id: number): void {
    const ok = confirm("Deseja realmente excluir ?");
    if (ok) {
      this.developerService.delete(id).subscribe((data) =>  {
        this.developerService.getAll().subscribe((data) =>  {
          this.developers = data;
        })
        alert('Excluido')
      })
    }

  }

  setDeveloper(dev: Developer): void {
    this.developer = {...dev};
  }

}
