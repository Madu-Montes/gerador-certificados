import { Component, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from './_components/secondary-button/secondary-button';

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, PrimaryButton, SecondaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('gerador-certificados')
}
