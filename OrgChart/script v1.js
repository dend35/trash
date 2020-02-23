class OrgChart{
    ///конструктор, да в js есть и такое
    constructor(options){
        this.$el = document.querySelector(options.Selector)
        this.Nodes = options.Nodes
        this.$el.style.width = options.Width + 'px'
        this.$el.style.height = options.Height + 'px'
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
        var node = document.createElement('div');
        node.id = this.Id
        this._NodeStyle(node, options)
        node.append(this._CreateNameField(options))
        node.append(this._CreateIdField(options))
        Node.component.$el.append(node)
console.log(node)
        return node
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
        return idField;
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