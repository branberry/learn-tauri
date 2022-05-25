import { invoke } from '@tauri-apps/api';
import { InvokeArgs } from '@tauri-apps/api/tauri';
export type TauriFunction = 'test';

export function safeInvoke<T>(
  fnName: TauriFunction,
  args?: InvokeArgs
): Promise<T> {
  return invoke(fnName, args);
}
