import { Message, MessageWithOptionalId } from '../message';
export declare abstract class CrossDomainCommunicator {
    protected url: URL | undefined;
    private connected;
    protected abstract onConnect(): Promise<void>;
    protected abstract onDisconnect(): void;
    protected abstract onEvent(event: MessageEvent<Message>): void;
    connect(): Promise<void>;
    disconnect(): void;
    protected peerWindow: Window | null;
    private getTargetOrigin;
    postMessage<M extends Message>(params: MessageWithOptionalId<M>, options?: {
        bypassTargetOriginCheck: boolean;
    }): void;
    postMessageForResponse<M extends Message>(params: MessageWithOptionalId<M>): Promise<Message>;
    private requestMap;
    private eventListener;
    private rejectWaitingRequests;
}
