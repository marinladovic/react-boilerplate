// eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is intentional
export function invariant(condition: any, message: string | (() => string)): asserts condition {
    if (!condition) {
        throw new Error(typeof message === 'function' ? message() : message)
    }
}

export function invariantResponse(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is intentional
    condition: any,
    message: string | (() => string),
    responseInit: ResponseInit,
): asserts condition {
    if (!condition) {
        throw new Response(typeof message === 'function' ? message() : message, {
            status: 400,
            ...responseInit,
        })
    }
}

export function getErrorMessage(error: unknown) {
    if (typeof error === 'string') return error
    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string')
        return error.message

    console.error('Unable to get error message for error', error)
    return 'Unknown error'
}
