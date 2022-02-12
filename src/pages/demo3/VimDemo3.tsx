import React, { useRef, useEffect, useState } from 'react';
import { VimWasm } from 'vim-wasm';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { saveAs } from 'file-saver';

const VimDemo3: React.FC = () => {
    const [vim, setVim] = useState<VimWasm>();
    const canvas = useRef<HTMLCanvasElement>(null);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (canvas.current && input.current) {
            const opts = {
                workerScriptPath: 'vim/vim.js',
                canvas: canvas.current,
                input: input.current
            };
            const v = new VimWasm(opts);

            // 文件导出事件监听
            v.onFileExport = (fullpath: string, contents: ArrayBuffer) => {
                const slashIdx = fullpath.lastIndexOf('/');
                const filename = slashIdx !== -1 ? fullpath.slice(slashIdx + 1) : fullpath;
                const blob = new Blob([contents], { type: 'application/octet-stream' });
                saveAs(blob, filename);
            };

            setVim(v);
            v.start();
        }
    }, []);

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input ref={input} />
                <Upload customRequest={
                    ({ file, onSuccess }:any) => (
                        vim?.dropFiles([file]).then(() => (
                            onSuccess(file)
                        )))
                }
                >
                    <Button icon={<UploadOutlined />}>导入文件</Button>
                </Upload>
                <Button onClick={() => { vim?.cmdline('export'); }}>
                    导出文件
                </Button>
            </div>
            <canvas ref={canvas} />
        </>
    );
};

export default VimDemo3;
