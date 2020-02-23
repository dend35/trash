class OrgChart{
    ///конструктор, да в js есть и такое
    constructor(options){
        this.$el = document.querySelector(options.Selector)
        this.Nodes = options.Nodes
        this.$el.width = options.Width
        this.$el.height = options.Height
        this.$el.style.background = options.BgColor //TODO: DEBUG
    }

    ///Добавить ноду
    AddNode(node){
        console.log("AddNode", node)
    }
    ///Удалить ноду
    DeleteNode(node){
        console.log("DeleteNode", node)
    }

    ///развернуть ноды
    ///node - id ноды
    ///all - развернуть дочерние?(bool)
    Expand(node, all){
        console.log("Expand", node, all)
    }
    ///по логике должно прятать все ноды до переданного
    ///node - id ноды
    Svernut(node){//прост я не нашел перевод слова свернуть
        console.log("Svernut", node)
    }
}

///что то вроде элементов орг структуры
class Node{
    static component;
    static width;
    static height;
    constructor(options){
        this.Id = options.Id
        this.Name = options.Name
        this.Parent = options.Parent
        this._Create(options)
    }

    ///Создание нода
    _Create(options){
        var ctx = Node.component.$el.getContext('2d')
        ctx.fillRect(options.Id*120,100,100,50)
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("x", 248, 43);
        ctx.fillText("y", 58, 165);
    }

    //делаем нод немного красивее
    _NodeStyle(node, options){
        node.style.width = Node.width + 'px'
        node.style.height = Node.height + 'px'
        node.style.background = options.BgColor //TODO: DEBUG
        node.style.margin = 20 + 'px' // отступ от других нодов
        node.style.display = 'block'
    }

    ///создаем поле с именем
    _CreateNameField(options){
        var nameField = document.createElement('div')
        nameField.append(options.Name)
        var nameFieldStyle = nameField.style;
        nameFieldStyle.color = 'white' //Цвет
        nameFieldStyle.textAlign = 'right' //Выравнивание текста
        //nameFieldStyle.paddingRight = 5 + 'px'//Отступ от правого края
        nameFieldStyle.width = 100 + 'px' //Ширина
        nameFieldStyle.marginLeft = Node.width / 2 - 5 + 'px'
        return nameField;
    }

    _CreateIdField(options){
        var idField = document.createElement('div')
        idField.append(options.Id)
        var idFieldStyle = idField.style;
        idFieldStyle.color = 'white' //Цвет
        idFieldStyle.textAlign = 'left' //Выравнивание текста
        idFieldStyle.display = "absolute"
        return idField
    }


    ///добавить кнопку свернуть/развернуть (пока не уверен нужно ли это, но пусть будет)
    AddButton(){
        
    }

}

var orgChart = new OrgChart({
    Selector: '#org',
    Height:600,
    Width:800,
    BgColor: 'cyan', //TODO: DEBUG
})

///Calculator
var nodeW = 200
var nodeH = 100
var startPosX = orgData.Width/2
var startPosY = orgData.Height/6
var layersCount = 1//изначально должно быть 1 т.к. в орг структуре будет хотя бы 1 элемент
var graphMap = []
function NodePositionCalculate() {
    
}
function GraphCalculate() {
    graphMap = orgData.map((i)=>{
    return {
        id: i.Id,
        parent: i.Parent
    }})//Строим карту связей

    //этот кусочек рекурсивного кода считает кол-во уровней иерархии//
    CalculateLayersCount(1, graphMap.copyWithin())
    function CalculateLayersCount(id, buffer) {
        var filterResult = buffer.filter((i)=>i.parent == id)
        buffer = buffer.filter(i=>i.id!=id)
    if(filterResult.length > 0){
        filterResult.forEach((i)=>CalculateLayersCount(i.id, buffer))
        layersCount++
    }
    }
    /////////////////////////////////////////////////////

    //убираем всех у кого id или родитель = null
    graphMap = graphMap.filter((i)=>i.id != null && i.parent != null)

}


GraphCalculate()






///\Calculator

Node.component = orgChart;
Node.width = 200
Node.height = 100

var nodes = orgData.map((i) => new Node({
    Id: i.Id,
    Name: i.Name,
    Parent: i.Parent,
    BgColor: 'indigo'
}))
console.log(orgChart)