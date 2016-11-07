function parentObj(obj){
    obj=obj.parentNode;
    if(obj.id)
    {
        return obj;
    }
    else
    {
        return parentObj(obj);
    }
}