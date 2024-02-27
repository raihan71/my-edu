'use client';
import React from 'react'

const Modal = (props: {
    children: React.ReactNode,
    isOpen: boolean,
    title: string,
    txtSubmit: string,
    txtCancel: string,
    onSubmit: () => void,
    onCancel: () => void,
    onClose: () => void
}) => {
    const { children, title, isOpen, onCancel, onClose} = props;
    return (
        <div id="default-modal" tabIndex={-1} aria-hidden={isOpen}
            className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'flex bg-black bg-opacity-50' : 'hidden'} items-center justify-center`}
        >
            <div className={`${isOpen ? 'relative' : 'hidden'} p-4 w-full max-w-2xl max-h-full overflow-y-auto`}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button onClick={onCancel || onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden={isOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal