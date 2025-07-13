import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  form = {
    title: '',
    name: '',
    email: '',
    message: ''
  };

  isSending = false;
  successMsg = '';
  errorMsg = '';

  onSubmit() {
    this.isSending = true;
    this.successMsg = '';
    this.errorMsg = '';

    // Fill these with your actual EmailJS IDs!
    const serviceID = 'service_rx8gt8i';
    const templateID = 'template_x65zrfy';
    const publicKey = 'Vij6GXymlsWlOVqxJ';

    emailjs.send(serviceID, templateID, {
      title: this.form.title,
      name: this.form.name,
      email: this.form.email,
      message: this.form.message,
      time: new Date().toLocaleString()
    }, publicKey)
      .then(() => {
        this.successMsg = 'Message sent! I’ll get back to you soon.';
        this.form = { title: '', name: '', email: '', message: '' };
        this.isSending = false;
      }, () => {
        this.errorMsg = 'Oops! Something went wrong. Please try again later.';
        this.isSending = false;
      });
  }
}
