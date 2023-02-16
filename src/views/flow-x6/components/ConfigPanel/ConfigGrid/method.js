import FlowGraph from "../../../graph";

const tryToJSON = (val) => {
    try {
        return JSON.parse(val)
    } catch (error) {
        return val
    }
}

export default class GridOption {
    // 绘制网格
    static gridOpt(globalGridAttr) {
        let options
        if (globalGridAttr.type === 'doubleMesh') {
            options = {
                type: globalGridAttr.type,
                args: [
                    {
                        color: globalGridAttr.color,
                        thickness: globalGridAttr.thickness,
                    },
                    {
                        color: globalGridAttr.colorSecond,
                        thickness: globalGridAttr.thicknessSecond,
                        factor: globalGridAttr.factor,
                    },
                ],
            }
        } else {
            options = {
                type: globalGridAttr.type,
                args: [
                    {
                        color: globalGridAttr.color,
                        thickness: globalGridAttr.thickness,
                    },
                ],
            }
        }
        const { graph } = FlowGraph
        graph.drawGrid(options)
    }

    // 设置网格大小
    static setGridSize(globalGridAttr) {
        const { graph } = FlowGraph
        graph.setGridSize(globalGridAttr.size)
    }

    // 获取网格大小
    static getGridSize() {
        const { graph } = FlowGraph
        graph.getGridSize()
    }

    // 重绘背景
    static backGroundOpt(globalGridAttr) {
        const options = {
            color: globalGridAttr.bgColor,
            // image: globalGridAttr.showImage ? 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*o-MuTpQaj7EAAAAAAAAAAABkARQnAQ' : undefined,
            image: globalGridAttr.showImage ? require('../../../../../assets/logo.png') : undefined,
            // image: undefined,
            repeat: globalGridAttr.repeat,
            angle: globalGridAttr.angle,
            size: tryToJSON(globalGridAttr.bgSize),
            position: tryToJSON(globalGridAttr.position),
            opacity: globalGridAttr.opacity,
        }
        const { graph } = FlowGraph
        graph.drawBackground(options)
    }

    // 是否显示网格
    static isShowGrid({ showGrid }) {
        const { graph } = FlowGraph
        if(showGrid) {
            graph.showGrid()
        } else {
            graph.hideGrid()
        }
    }
}
