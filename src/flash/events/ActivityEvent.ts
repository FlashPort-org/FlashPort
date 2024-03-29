import { AEvent } from "./AEvent";

/// @eventType	flash.events.ActivityEvent.ACTIVITY
/*[Event(name="activity", type="flash.events.ActivityEvent")]*/ 

/**
 * A Camera or Microphone object dispatches an ActivityEvent object whenever a camera or microphone reports that it has 
 * become active or inactive. There is only one type of activity event: <codeph class="+ topic/ph pr-d/codeph ">ActivityEvent.ACTIVITY</codeph>.
 * 
 *   EXAMPLE:
 * 
 *   The following example demonstrates the use of the ActivityEvent class by
 * attaching an event listener method named <codeph class="+ topic/ph pr-d/codeph ">activityHandler()</codeph> to the microphone and
 * generating text information every time the microphone generates an <codeph class="+ topic/ph pr-d/codeph ">activity</codeph> event.
 * <codeblock xml:space="preserve" class="+ topic/pre pr-d/codeblock ">
 * 
 *   package {
 * import flash.display.Sprite;
 * import flash.events.ActivityEvent;
 * import flash.media.Microphone;
 * 
 *   public class ActivityEventExample extends Sprite {
 * public function ActivityEventExample() {
 * var mic:Microphone = Microphone.getMicrophone();
 * mic.addEventListener(ActivityEvent.ACTIVITY, activityHandler);
 * }
 * 
 *   private function activityHandler(event:ActivityEvent):void {
 * trace("event: " + event);
 * trace("event.activating: " + event.activating);
 * }
 * }
 * }
 * </codeblock>
 * @langversion	3.0
 * @playerversion	Flash 9
 */
export class ActivityEvent extends AEvent
{
	private _activating:boolean;
	
	/**
	 * The ActivityEvent.ACTIVITY constant defines the value of the type property of an activity event object. 
	 * This event has the following properties:PropertyValueactivatingtrue if the device is activating or false if it is deactivating.bubblesfalsecancelablefalse; there is no default behavior to cancel.currentTargetThe object that is actively processing the Event 
	 * object with an event listener.targetThe object beginning or ending a session, such as a Camera or 
	 * Microphone object.
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	public static ACTIVITY : string = "activity";
	public static MOTION_DETECTED : string = "motionDetected";
	public static MOTION_ENDED : string = "motionEnded";

	/**
	 * Indicates whether the device is activating (true) or deactivating 
	 * (false).
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	public get activating () : boolean
	{
		return this._activating;
	}
	public set activating (value:boolean)
	{
		this._activating = value;
	}

	/**
	 * Creates an event object that contains information about activity events.
	 * Event objects are passed as parameters to Event listeners.
	 * @param	type	The type of the event. Event listeners can access this information through the 
	 *   inherited type property. There is only one type of activity event: 
	 *   ActivityEvent.ACTIVITY.
	 * @param	bubbles	Determines whether the Event object participates in the bubbling phase of the 
	 *   event flow. Event listeners can access this information through the inherited 
	 *   bubbles property.
	 * @param	cancelable	Determines whether the Event object can be canceled. Event listeners can 
	 *   access this information through the inherited cancelable property.
	 * @param	activating	Indicates whether the device is activating (true) or 
	 *   deactivating (false). Event listeners can access this information through the 
	 *   activating property.
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	constructor (type:string, bubbles:boolean = false, cancelable:boolean = false, activating:boolean = false){
		super(type, bubbles, cancelable);
		this._activating = activating;
	}

	/**
	 * Creates a copy of an ActivityEvent object and sets the value of each property to match that of 
	 * the original.
	 * @return	A new ActivityEvent object with property values that match those of the original.
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	/*override*/ public clone():AEvent 
	{
		return new ActivityEvent(this.type, this.bubbles, this.cancelable, this.activating);
	}

	/**
	 * Returns a string that contains all the properties of the ActivityEvent object. The following 
	 * format is used:
	 * [ActivityEvent type=value bubbles=value cancelable=value 
	 * activating=value]
	 * @return	A string that contains all the properties of the ActivityEvent object.
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 */
	/*override*/ public toString () : string
	{
		return this.formatToString("ActivityEvent","type","bubbles","cancelable","activating");
	}
}
