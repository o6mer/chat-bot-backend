export type TChat = {
  id: string;
  customerName: string;
  status: string;
  isSeen: boolean;
  messages: Array<TMessage>;
  creationTime: Date;
};

export type TMessage = {
  writer: string;
  time: Date | string;
  type: string;
  content?: string;
  children?: any;
};

export type TTemplate = {
  title?: string;
  content?: string;
  id?: string;
};

export type ServerToClientEvents = {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
};

export type ClientToServerEvents = {
  hello: () => void;
};

export type InterServerEvents = {
  ping: () => void;
};

export type SocketData = {
  name: string;
  age: number;
};
