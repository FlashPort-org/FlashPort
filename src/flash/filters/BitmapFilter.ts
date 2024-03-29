import { Canvas, Image, Paint, Paragraph, ParagraphBuilder, Path, TextStyle } from "canvaskit-wasm";

/**
 * The BitmapFilter class is the base class for all image filter effects.
 * 
 *   <p class="- topic/p ">The BevelFilter, BlurFilter, ColorMatrixFilter, ConvolutionFilter, DisplacementMapFilter,
 * DropShadowFilter, GlowFilter, GradientBevelFilter, and GradientGlowFilter classes all extend the
 * BitmapFilter class. You can apply these filter effects to any display object.</p><p class="- topic/p ">You can neither directly instantiate nor extend BitmapFilter.</p>
 * 
 *   EXAMPLE:
 * 
 *   The following example shows how several filters may be applied to a given
 * DisplayObject object and tracked using the <codeph class="+ topic/ph pr-d/codeph ">filters</codeph> property.
 * <codeblock xml:space="preserve" class="+ topic/pre pr-d/codeblock ">
 * package {
 * import flash.display.Sprite;
 * import flash.filters.*;
 * 
 *   public class BitmapFilterExample extends Sprite {
 * public function BitmapFilterExample() {
 * trace(this.filters.length);             // 0
 * 
 *   var tmpFilters:Array = this.filters;
 * tmpFilters.push(FilterFactory.createFilter(FilterFactory.BEVEL_FILTER));
 * tmpFilters.push(FilterFactory.createFilter(FilterFactory.GLOW_FILTER));
 * this.filters = tmpFilters;
 * 
 *   trace(this.filters.length);             // 2
 * trace(this.filters[0] is BitmapFilter); // true
 * trace(this.filters[0] is BevelFilter);  // true
 * trace(this.filters[1] is BitmapFilter); // true
 * trace(this.filters[1] is GlowFilter);   // true
 * }
 * }
 * }
 * 
 *   import flash.filters.*;
 * class FilterFactory {
 * public static var BEVEL_FILTER:string = "BevelFilter";
 * public static var BevelFilterConstructor:Class = BevelFilter;
 * 
 *   public static var BLUR_FILTER:string = "BlurFilter";
 * public static var BlurFilterConstructor:Class = BlurFilter;
 * 
 *   public static var COLOR_MATRIX_FILTER:string = "ColorMatrixFilter";
 * public static var ColorMatrixFilterConstructor:Class = ColorMatrixFilter;
 * 
 *   public static var CONVOLUTION_FILTER:string = "ConvolutionFilter";
 * public static var ConvolutionFilterConstructor:Class = ConvolutionFilter;
 * 
 *   public static var DISPLACEMENT_MAP_FILTER:string = "DisplacementMapFilter";
 * public static var DisplacementMapFilterConstructor:Class = DisplacementMapFilter;
 * 
 *   public static var DROP_SHADOW_FILTER:string = "DropShadowFilter";
 * public static var DropShadowFilterConstructor:Class = DropShadowFilter;
 * 
 *   public static var GLOW_FILTER:string = "GlowFilter";
 * public static var GlowFilterConstructor:Class = GlowFilter;
 * 
 *   public static var GRADIENT_BEVEL_FILTER:string = "GradientBevelFilter";
 * public static var GradientBevelFilterConstructor:Class = GradientBevelFilter;
 * 
 *   public static var GRADIENT_GLOW_FILTER:string = "GradientGlowFilter";
 * public static var GradientGlowFilterConstructor:Class = GradientGlowFilter;
 * 
 *   public static function createFilter(type:string):BitmapFilter {
 * return new FilterFactory[type + "Constructor"]();   
 * }
 * }
 * </codeblock>
 * @langversion	3.0
 * @playerversion	Flash 9
 */
export class BitmapFilter extends Object
{
	protected _offsetX:number = 0;
	protected _offsetY:number = 0;
	
	constructor (){
		super();
	}

	public _applyFilter(ctx:Canvas, path:Path | CanvasImageSource | Paragraph, blurPaint?:Paint, paragraphBuilder?:ParagraphBuilder, textStyle?:TextStyle, paraText?:string):Paragraph | Paint
	{
		return null;
	}

	/**
	 * Returns a BitmapFilter object that is an exact copy of the original
	 * BitmapFilter object.
	 * @return	A BitmapFilter object.
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	public clone () : BitmapFilter
	{
		return null;
	}
	
	public get offsetX():number 
	{
		return this._offsetX;
	}
	
	public get offsetY():number 
	{
		return this._offsetY;
	}
}