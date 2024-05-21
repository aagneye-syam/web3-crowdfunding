import { Signer, StateUpdateListener } from '../interface';
import { PopUpCommunicator } from '../../core/communicator/PopUpCommunicator';
import { AppMetadata, RequestArguments } from '../../core/provider/interface';
import { AddressString } from '../../core/type';
export declare class WLSigner implements Signer {
    private readonly popupCommunicator;
    private readonly adapter;
    constructor(params: {
        metadata: AppMetadata;
        popupCommunicator: PopUpCommunicator;
        updateListener: StateUpdateListener;
    });
    handshake(): Promise<AddressString[]>;
    request<T>(requestArgs: RequestArguments): Promise<T>;
    handleWalletLinkSessionRequest(): Promise<void>;
    private postWalletLinkSession;
    private postWalletLinkConnected;
    private postWalletLinkUpdate;
    disconnect(): Promise<void>;
}
