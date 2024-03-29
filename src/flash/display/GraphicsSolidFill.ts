import { IGraphicsFill } from "./IGraphicsFill";
import { IGraphicsData } from "./IGraphicsData";
import { FPConfig } from "../../FPConfig";
import { ColorTransform } from "../geom/ColorTransform";
import { Canvas, Color, Paint, Path } from "canvaskit-wasm";
import { Matrix } from "../geom";
import { IRenderer } from "../__native/IRenderer";
	
export class GraphicsSolidFill extends Object implements IGraphicsFill, IGraphicsData
{
	public color:number = 0x000000;
	public alpha:number = 1.0;
	public _glcolor:any[] = [];
	public paint:Paint;
	public path:Path;
	public graphicType:string = "FILL";

	private rgba:Color;

	constructor(color:number = 0x000000, alpha:number = 1.0){
		super();
		this.color = color;
		this.alpha = alpha;
		
		this.paint = new FPConfig.canvasKit.Paint();
		this.paint.setAntiAlias(true);
		this.rgba = (FPConfig.renderer as IRenderer).getRGBAColor(this.color, this.alpha, new ColorTransform());
		this.paint.setColor(this.rgba);
	}
	
	public draw(ctx:CanvasRenderingContext2D,colorTransform:ColorTransform):void
	{
		ctx.fillStyle = (FPConfig.renderer as IRenderer).getCssColor(this.color,this.alpha, colorTransform,null).toString();
	}

	public skiaDraw(ctx:Canvas, colorTransform:ColorTransform, mat?:Matrix):void
	{
		if (this.rgba != colorTransform.rgba)
		{
			var rgba:Color = (FPConfig.renderer as IRenderer).getRGBAColor(this.color, this.alpha, colorTransform);
			this.paint.setColor(rgba);
		} 
	}
}