import { NivelService } from './../../services/nivel.service';
import { Component, OnInit } from '@angular/core';
import { Nivel } from '../../nivel.model';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  niveis: Nivel[] = [];

  nivel: Nivel = {
    level: '0',
  }

  constructor(private nivelService: NivelService) { }

  ngOnInit(): void {
    this.nivelService.getAll().subscribe((data) =>  {
      this.niveis = data;
    })
  }

  createNivel(): void {
    if(this.nivel.id) {
      this.editNivel()
      return;
    }
    this.nivelService.create({
      /* id: this.nivel.id, */
      level: Number(this.nivel.level)}).subscribe((data) =>  {
      this.nivelService.getAll().subscribe((data) =>  {
        this.niveis = data;
      })
      this.nivel = {
        /* id: 0, */
        level: '0'};
    })
  }

  editNivel(): void {
    this.nivelService.update(this.nivel.id, {
      /* id: this.nivel.id, */
      level: Number(this.nivel.level),}).subscribe((data) =>  {
      this.nivelService.getAll().subscribe((data) =>  {
        this.niveis = data;
      })
      this.nivel = {
        /* id: 0, */
        level: '0'};
    })
  }

  removeNivel(id: number): void {
    const ok = confirm("Deseja realmente excluir ?");
    if (ok) {
      this.nivelService.delete(id).subscribe((data) =>  {
        this.nivelService.getAll().subscribe((data) =>  {
          this.niveis = data;
        })
        alert('Excluido')
      })
    }

  }

  setNivel(niv: Nivel): void {
    this.nivel = {...niv};
  }

}
