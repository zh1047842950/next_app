import React from 'react'
import Link from 'next/link'
import "./index.sass"

export interface P {
    className?: string
}

export interface S {
}

class Navs extends React.Component<P, S> {
    // 构造
    constructor(props: any) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <nav className={'navs'}>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/mall'}>
                    Mall
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
            </nav>
        );
    }

    componentDidMount(): void {
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return true
    }
}

export default Navs
