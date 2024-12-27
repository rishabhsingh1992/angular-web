import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What is the basic unit of data storage in a computer?',
      answer:
        'The basic unit of data storage in a computer is the bit, which can represent either a 0 or a 1.',
    },
    {
      question: 'What is the difference between hardware and software?',
      answer:
        'Hardware refers to the physical components of a computer, such as the CPU, RAM, and storage devices. Software refers to the programs and data that run on the hardware.',
    },
    {
      question: 'What is the function of the CPU in a computer?',
      answer:
        'The CPU (Central Processing Unit) is the brain of the computer. It executes instructions and performs calculations.',
    },
    {
      question: 'What is the purpose of RAM in a computer?',
      answer:
        'RAM (Random Access Memory) is used to store data that the CPU is currently using. It is faster than storage devices like hard drives.',
    },
    {
      question: 'What is the operating system of a computer?',
      answer:
        'The operating system is the software that manages the hardware and software resources of a computer. Examples of operating systems include Windows, macOS, and Linux.',
    },
    {
      question: 'What is the purpose of a network interface card (NIC)?',
      answer:
        'A NIC allows a computer to connect to a network, such as the internet.',
    },
    {
      question: 'What is the difference between a LAN and a WAN?',
      answer:
        'A LAN (Local Area Network) connects devices within a limited area, such as a building or campus. A WAN (Wide Area Network) connects devices over a larger geographic area, such as a country or the world.',
    },
    {
      question: 'What is the internet?',
      answer:
        'The internet is a global network of interconnected computers that allows users to access information and communicate with each other.',
    },
    {
      question: 'What is a database?',
      answer:
        'A database is an organized collection of data that can be accessed, managed, and updated. Databases are used to store and retrieve information efficiently.',
    },
    {
      question: 'What is a virus?',
      answer:
        'A virus is a malicious software program that can infect a computer and damage or steal data.',
    },
    {
      question: 'What is a firewall?',
      answer:
        'A firewall is a security system that monitors and controls network traffic to prevent unauthorized access.',
    },
    {
      question: 'What is cloud computing?',
      answer:
        'Cloud computing is the delivery of computing services, such as storage and processing, over the internet. Instead of relying on local hardware, users access resources from remote servers.',
    },
    {
      question: 'What is artificial intelligence (AI)?',
      answer:
        'AI is the simulation of human intelligence in machines, such as computers. AI systems can learn, reason, and solve problems.',
    },
    {
      question:
        'What is the difference between machine learning and deep learning?',
      answer:
        'Machine learning is a subset of AI that involves training computers to learn from data. Deep learning is a type of machine learning that uses artificial neural networks to learn complex patterns.',
    },
  ];
}
