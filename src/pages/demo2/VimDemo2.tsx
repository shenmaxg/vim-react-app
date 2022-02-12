import React, { useRef, useEffect } from 'react';
import { VimWasm } from 'vim-wasm';

const VimDemo2: React.FC = () => {
    const canvas = useRef<HTMLCanvasElement>(null);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (canvas.current && input.current) {
            const opts = {
                workerScriptPath: 'vim/vim.js',
                canvas: canvas.current,
                input: input.current
            };
            const vim = new VimWasm(opts);

            vim.start({
                dirs: ['/work', '/work/documents'],
                persistentDirs: ['/home/web_user/.vim'],
                cmdArgs: ['/home/web_user/.vim/vimrc']
            });
        }
    }, []);

    return (
        <>
            <input ref={input} />
            <canvas ref={canvas} />
        </>
    );
};

export default VimDemo2;
