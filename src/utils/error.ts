class Fault extends Error {
  name: string;
  cowebp: number;

  constructor(cowebp: number, name: string, message: string) {
    super(message);
    this.name = name;
    this.cowebp = cowebp;
  }
}

export webpfault Fault;
