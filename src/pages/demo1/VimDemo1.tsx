import React, { useRef, useEffect } from 'react';
import { VimWasm } from 'vim-wasm';

const VimDemo1: React.FC = () => {
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

            vim.start();
        }
    }, []);

    return (
        <>
            <input ref={input} />
            <canvas ref={canvas} />
        </>
    );
};

export default VimDemo1;
