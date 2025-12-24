---
id: kapsl94m9szlcqc8b47iz1x
title: Gen Ai
desc: ''
updated: 1766573623812
created: 1766573623812
---

## Gen AI evolution 
![GEN AI](/assets/images/GEN-AI.png)
### AI
- simulation of **Human intelligence** by machines
- key focus: **decision making, problem solving**, understanding language. Major use case in rule based systems like playing chess or diagnosing simple medical conditions.

- AI laid the foundation with **rule based systems**.

**Challenge**: This system couldn't learn. Needs to be explicitly programmed for every scenario. Think of it like old machined chess, can only run steps that are already programmed. Can't learn new moves.

### ML
- learn from data. No explicit programming. automatically Identify patterns, make predictions.

Three major types
- **supervised learning**: uses labelled data for training models eg: predicting house prices based on historical data.
- **unsupervised learning**: find hidden patterns without labels, eg: grouping customers based on behavior 
- **reinforcement learning**: involves models learning through trial and error.

eg: Netflix recommendations
- ML introduced **data driven learning**, allowing models to learn from data.

### Deep learning
subset of ML
- Neural networks to automatically learn features from raw data, inspired by structure of Human brain.
eg: Recognizing faces from crowd, understanding spoken language.

Deep learning architectures:
- **Convolutional Neural Networks(CNN)**: for image data
- **Recurrent Neural Networks(RNN)**: for sequential data like text
- **Transformers**: revolutionalized Natural Language processing.

- DL revolutionarized how we **process complex data, introduced Neural networks** and **automatic pattern recognition**.

### Gen AI
AI models that generate new data, original content that didn't exist before.
writing, generating image etc.
- relies on powerful architectures like: transformers based models like GPTs, GANSs(Generative Adversarial Networks)

- transforming how machines create, enables m/cs to create original content.

#### **Core idea behind Gen AI**
- learns the patterns and structures in a dataset, it can generate entirely new data that fits within those learned patterns.
eg: trained on images of cats, learns the structure of what makes a cat- its shape, features, and textures-and can create a new image of cat.

## How Gen AI works
relies on 4 main components
- **Training Data**: serves as a foundation of everything. requires large dataset for training.
- **Learning patterns and structures**: learns the underlying principle and patterns. Uses neural networks for pattern recognition.
- **Generating new content**- does sampling from learned patterns.
- **Fine tumimg the model**- adapting models for specific tasks. Taking a pre trained model and training it further on a smaller more fovused data set.
- **Reinforcememt learning with Human feedback(RLHF)** initial training -> Human feedback --> reward modelling(feedback is used to build a reward model, which helps AI to assign scores to its future o/ps) --> reinforcement learning(AI continues to improve by generating better o/ps that align with human preferences)

## Types of Gen AI models

- **Generative adversarial Networks(GAns)**
- **Variational autoencoders(VAEs)**
- **Transformer models like GPT**

**Generative adversarial Networks(GAns)**
- popular models for image generation
- consits of 2 neural networks: Generator and Discriminator.

![GANs](/assets/images/GANs.png)

- generator creates new data and discriminator evaluates whether the data is real or fake. Overtime the generator gets better at producing convincing images.
eg: deepfake videos, realistic images

**Variational autoencoders(VAEs)**
Reconstructing data and generating new variations of it by learning a latent space representation(**encode** data into a lower dimensional space).

**Transformer based models(GPTs)**
- highly effective at generating text because of **self attention mechanism**
- self attention mechanism: this mechanism allows the model to weigh the importance of different parts of a sentence or sequence. Helps in understanding context and relationship between words.

eg: GPT-4