import React from 'react'
import {Navs} from 'components'
import "styles/index.sass"

export interface P {
    className?: string
}

export interface S {
}

class Index extends React.Component<P, S> {
    // 构造
    constructor(props: any) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={'home'}>
                <Navs />
                <h1>Home Page</h1>
            </div>
        );
    }

    componentDidMount(): void {
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return true
    }
}

export default Index
