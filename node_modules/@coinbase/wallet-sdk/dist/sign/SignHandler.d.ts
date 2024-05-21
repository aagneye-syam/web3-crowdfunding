import { StateUpdateListener } from './interface';
import { ConstructorOptions, RequestArguments } from '../core/provider/interface';
type SignerConfiguratorOptions = ConstructorOptions & {
    listener: StateUpdateListener;
};
export declare class SignHandler {
    private signer;
    private readonly metadata;
    private readonly preference;
    private readonly listener;
    private readonly popupCommunicator;
    private readonly storage;
    constructor(params: Readonly<SignerConfiguratorOptions>);
    handshake(): Promise<import("../core/type").AddressString[]>;
    request(request: RequestArguments): Promise<unknown>;
    disconnect(): void;
    private loadSigner;
    private selectSigner;
    private requestSignerSelection;
    private initSigner;
    private walletlinkSigner?;
    private handleConfigUpdateMessage;
}
export {};
